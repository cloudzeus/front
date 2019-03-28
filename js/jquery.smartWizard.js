/*!
 * SmartWizard v4.3.1
 * The awesome jQuery step wizard plugin with Bootstrap support
 * http://www.techlaboratory.net/smartwizard
 *
 * Created by Dipu Raj
 * http://dipuraj.me
 *
 * Licensed under the terms of the MIT License
 * https://github.com/techlab/SmartWizard/blob/master/LICENSE
 */

;(function ($, window, document, undefined) {
    "use strict";
    // Default options

    var defaults = {
        selected: 0, // Initial selected step, 0 = first step
        keyNavigation: true, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
        autoAdjustHeight: true, // Automatically adjust content height
        cycleSteps: false, // Allows to cycle the navigation of steps
        backButtonSupport: true, // Enable the back button support
        useURLhash: true, // Enable selection of the step based on url hash
        showStepURLhash: true, // Show url hash based on step
        lang: { // Language variables for button
            next: 'Next',
            previous: 'Previous'
        },
        toolbarSettings: {
            toolbarPosition: 'bottom', // none, top, bottom, both
            toolbarButtonPosition: 'end', // start, end
            showNextButton: true, // show/hide a Next button
            showPreviousButton: true, // show/hide a Previous button
            toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        anchorSettings: {
            anchorClickable: true, // Enable/Disable anchor navigation
            enableAllAnchors: false, // Activates all anchors clickable all times
            markDoneStep: true, // Add done css
            markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
            removeDoneStepOnNavigateBack: false, // While navigate back done step after active step will be cleared
            enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
        },
        contentURL: null, // content url, Enables Ajax content loading. Can also set as data data-content-url on anchor
        contentCache: true, // cache step contents, if false content is fetched always from ajax url
        ajaxSettings: {}, // Ajax extra settings
        disabledSteps: [], // Array Steps disabled
        errorSteps: [], // Highlight step with errors
        hiddenSteps: [], // Hidden steps
        theme: 'default', // theme for the wizard, related css need to include for other than default theme
        transitionEffect: 'none', // Effect on navigation, none/slide/fade
        transitionSpeed: '400'
    };

    // The plugin constructor
    function SmartWizard(element, options) {
        // Merge user settings with default, recursively
        this.options = $.extend(true, {}, defaults, options);
        // Main container element
        this.main = $(element);
        // Navigation bar element
        this.nav = this.main.children('ul');
        // Step anchor elements
        this.steps = $("li > a", this.nav);
        // Content container
        this.container = this.main.children('div');
        // Content pages
        this.pages = this.container.children('div');
        // Active step index
        this.current_index = null;

        // Backward compatibility
        this.options.toolbarSettings.toolbarButtonPosition = this.options.toolbarSettings.toolbarButtonPosition === 'right' ? 'end' : this.options.toolbarSettings.toolbarButtonPosition;
        this.options.toolbarSettings.toolbarButtonPosition = this.options.toolbarSettings.toolbarButtonPosition === 'left' ? 'start' : this.options.toolbarSettings.toolbarButtonPosition;

        // Default fix
        this.options.theme = this.options.theme === null || this.options.theme === '' ? 'default' : this.options.theme;

        // Call initial method
        this.init();
    }

    $.extend(SmartWizard.prototype, {

        init: function () {
            // Set the elements
            this._setElements();
            // Add toolbar
            this._setToolbar();
            // Assign plugin events
            this._setEvents();

            var idx = this.options.selected;
            // Get selected step from the url
            if (this.options.useURLhash) {
                // Get step number from url hash if available
                var hash = window.location.hash;
                if (hash && hash.length > 0) {
                    var elm = $("a[href*='" + hash + "']", this.nav);
                    if (elm.length > 0) {
                        var id = this.steps.index(elm);
                        idx = id >= 0 ? id : idx;
                    }
                }
            }

            if (idx > 0 && this.options.anchorSettings.markDoneStep && this.options.anchorSettings.markAllPreviousStepsAsDone) {
                // Mark previous steps of the active step as done
                this.steps.eq(idx).parent('li').prevAll().addClass("done");
            }

            // Show the initial step
            this._showStep(idx);
        },

        // PRIVATE FUNCTIONS

        _setElements: function () {
            // Set the main element
            this.main.addClass('sw-main sw-theme-' + this.options.theme);
            // Set anchor elements
            this.nav.addClass('nav nav-pills step-anchor').children('li').addClass('nav-item').children('a').addClass('nav-pills'); // nav-justified  nav-pills

            // Make the anchor clickable
            if (this.options.anchorSettings.enableAllAnchors !== false && this.options.anchorSettings.anchorClickable !== false) {
                this.steps.parent('li').addClass('clickable');
            }
            // Set content container
            this.container.addClass('sw-container tab-content');
            // Set content pages
            this.pages.addClass('tab-pane step-content');

            // Disabled steps
            var mi = this;
            if (this.options.disabledSteps && this.options.disabledSteps.length > 0) {
                $.each(this.options.disabledSteps, function (i, n) {
                    mi.steps.eq(n).parent('li').addClass('disabled');
                });
            }
            // Error steps
            if (this.options.errorSteps && this.options.errorSteps.length > 0) {
                $.each(this.options.errorSteps, function (i, n) {
                    mi.steps.eq(n).parent('li').addClass('danger');
                });
            }
            // Hidden steps
            if (this.options.hiddenSteps && this.options.hiddenSteps.length > 0) {
                $.each(this.options.hiddenSteps, function (i, n) {
                    mi.steps.eq(n).parent('li').addClass('hidden');
                });
            }

            return true;
        },
        _setToolbar: function () {
            // Skip right away if the toolbar is not enabled
            if (this.options.toolbarSettings.toolbarPosition === 'none') {
                return true;
            }

            // Create the toolbar buttons
            var btnNext = this.options.toolbarSettings.showNextButton !== false ? $('<button></button>').text(this.options.lang.next).addClass('btn btn-myForm sw-btn-next').attr('type', 'button') : null;
            var btnPrevious = this.options.toolbarSettings.showPreviousButton !== false ? $('<button></button>').text(this.options.lang.previous).addClass('btn btn-myFormPre sw-btn-prev').attr('type', 'button') : null;
            var btnGroup = $('<div></div>').addClass('btn-group mr-2 sw-btn-group').attr('role', 'group').append(btnPrevious, btnNext);

            // Add extra toolbar buttons
            var btnGroupExtra = null;

            if (this.options.toolbarSettings.toolbarExtraButtons && this.options.toolbarSettings.toolbarExtraButtons.length > 0) {
                btnGroupExtra = $('<div></div>').addClass('btn-group mr-2 sw-btn-group-extra').attr('role', 'group');
                $.each(this.options.toolbarSettings.toolbarExtraButtons, function (i, n) {
                    btnGroupExtra.append(n.clone(true));
                });
            }

            var toolbarTop, toolbarBottom;
            // Append toolbar based on the position
            switch (this.options.toolbarSettings.toolbarPosition) {
                case 'top':
                    toolbarTop = $('<div></div>').addClass('btn-toolbar sw-toolbar sw-toolbar-top justify-content-' + this.options.toolbarSettings.toolbarButtonPosition);
                    toolbarTop.append(btnGroup);
                    if (this.options.toolbarSettings.toolbarButtonPosition === 'start') {
                        toolbarTop.prepend(btnGroupExtra);
                    } else {
                        toolbarTop.append(btnGroupExtra);
                    }
                    this.container.before(toolbarTop);
                    break;
                case 'bottom':
                    toolbarBottom = $('<div></div>').addClass('btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-' + this.options.toolbarSettings.toolbarButtonPosition);
                    toolbarBottom.append(btnGroup);
                    if (this.options.toolbarSettings.toolbarButtonPosition === 'start') {
                        toolbarBottom.prepend(btnGroupExtra);
                    } else {
                        toolbarBottom.append(btnGroupExtra);
                    }
                    this.container.after(toolbarBottom);
                    break;
                case 'both':
                    toolbarTop = $('<div></div>').addClass('btn-toolbar sw-toolbar sw-toolbar-top justify-content-' + this.options.toolbarSettings.toolbarButtonPosition);
                    toolbarTop.append(btnGroup);
                    if (this.options.toolbarSettings.toolbarButtonPosition === 'start') {
                        toolbarTop.prepend(btnGroupExtra);
                    } else {
                        toolbarTop.append(btnGroupExtra);
                    }
                    this.container.before(toolbarTop);

                    toolbarBottom = $('<div></div>').addClass('btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-' + this.options.toolbarSettings.toolbarButtonPosition);
                    toolbarBottom.append(btnGroup.clone(true));

                    if (btnGroupExtra !== null) {
                      if (this.options.toolbarSettings.toolbarButtonPosition === 'start') {
                          toolbarBottom.prepend(btnGroupExtra.clone(true));
                      } else {
                          toolbarBottom.append(btnGroupExtra.clone(true));
                      }
                    }
                    this.container.after(toolbarBottom);
                    break;
                default:
                    toolbarBottom = $('<div></div>').addClass('btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-' + this.options.toolbarSettings.toolbarButtonPosition);
                    toolbarBottom.append(btnGroup);
                    if (this.options.toolbarSettings.toolbarButtonPosition === 'start') {
                        toolbarBottom.append(btnGroupExtra);
                    } else {
                        toolbarBottom.append(btnGroupExtra);
                    }
                    this.container.after(toolbarBottom);
                    break;
            }
            return true;
        },
        _setEvents: function () {
            // Anchor click event
            var mi = this;
            $(this.steps).on("click", function (e) {
                e.preventDefault();
                if (mi.options.anchorSettings.anchorClickable === false) {
                    return true;
                }
                var idx = mi.steps.index(this);
                if (mi.options.anchorSettings.enableAnchorOnDoneStep === false && mi.steps.eq(idx).parent('li').hasClass('done')) {
                    return true;
                }

                if (idx !== mi.current_index) {
                    if (mi.options.anchorSettings.enableAllAnchors !== false && mi.options.anchorSettings.anchorClickable !== false) {
                        mi._showStep(idx);
                    } else {
                        if (mi.steps.eq(idx).parent('li').hasClass('done')) {
                            mi._showStep(idx);
                        }
                    }
                }
            });

            // Next button event
            $('.sw-btn-next', this.main).on("click",  (e) => {
                const si = this.current_index;
                e.preventDefault();
                if(si == 1 || si==2 ) return
                mi._showNext();
            });

            // Previous button event
            $('.sw-btn-prev', this.main).on("click", function (e) {
                e.preventDefault();
                mi._showPrevious();
            });

            // Keyboard navigation event
            if (this.options.keyNavigation) {
                $(document).keyup(function (e) {
                    mi._keyNav(e);
                });
            }

            // Back/forward browser button event
            if (this.options.backButtonSupport) {
                $(window).on('hashchange', function (e) {
                    if (!mi.options.useURLhash) {
                        return true;
                    }
                    if (window.location.hash) {
                        var elm = $("a[href*='" + window.location.hash + "']", mi.nav);
                        if (elm && elm.length > 0) {
                            e.preventDefault();
                            mi._showStep(mi.steps.index(elm));
                        }
                    }
                });
            }

            return true;
        },
        _showNext: function () {
            var si = this.current_index + 1;
            // Find the next not disabled step
            for (var i = si; i < this.steps.length; i++) {
                if (!this.steps.eq(i).parent('li').hasClass('disabled') && !this.steps.eq(i).parent('li').hasClass('hidden')) {
                    si = i;
                    break;
                }
            }

            if (this.steps.length <= si) {
                if (!this.options.cycleSteps) {
                    return false;
                }
                si = 0;
            }
            this.handleFormSumbit(si);
            return true;
        },
        _showPrevious: function () {
            var si = this.current_index - 1;
            // Find the previous not disabled step
            for (var i = si; i >= 0; i--) {
                if (!this.steps.eq(i).parent('li').hasClass('disabled') && !this.steps.eq(i).parent('li').hasClass('hidden')) {
                    si = i;
                    break;
                }
            }
            if (0 > si) {
                if (!this.options.cycleSteps) {
                    return false;
                }
                si = this.steps.length - 1;
            }
            try{

                let payload = JSON.parse(localStorage.formData)
                this.handleData(payload,si)
            }catch{
                console.log('failed to parse JSON')
                this._showStep(si);
            }
            return true;
        },
        _showStep: function (idx) {
            // If step not found, skip
            if (!this.steps.eq(idx)) {
                return false;
            }
            // If current step is requested again, skip
            if (idx == this.current_index) {
                return false;
            }
            // If it is a disabled step, skip
            if (this.steps.eq(idx).parent('li').hasClass('disabled') || this.steps.eq(idx).parent('li').hasClass('hidden')) {
                return false;
            }
            // Load step content
            this._loadStepContent(idx);
            return true;
        },
        _loadStepContent: function (idx) {
            var mi = this;
            // Get current step elements
            var curTab = this.steps.eq(this.current_index);
            // Get the direction of step navigation
            var stepDirection = '';
            var elm = this.steps.eq(idx);
            var contentURL = elm.data('content-url') && elm.data('content-url').length > 0 ? elm.data('content-url') : this.options.contentURL;

            if (this.current_index !== null && this.current_index !== idx) {
                stepDirection = this.current_index < idx ? "forward" : "backward";
            }

            // Trigger "leaveStep" event
            if (this.current_index !== null && this._triggerEvent("leaveStep", [curTab, this.current_index, stepDirection]) === false) {
                return false;
            }

            if (contentURL && contentURL.length > 0 && (!elm.data('has-content') || !this.options.contentCache)) {
                // Get ajax content and then show step
                var selPage = elm.length > 0 ? $(elm.attr("href"), this.main) : null;

                var ajaxSettings = $.extend(true, {}, {
                    url: contentURL,
                    type: "POST",
                    data: { step_number: idx },
                    dataType: "text",
                    beforeSend: function () {
                        mi._loader('show');
                    },
                    error: function (jqXHR, status, message) {
                        mi._loader('hide');
                        $.error(message);
                    },
                    success: function (res) {
                        if (res && res.length > 0) {
                            elm.data('has-content', true);
                            selPage.html(res);
                        }
                        mi._loader('hide');
                        mi._transitPage(idx);
                    }
                }, this.options.ajaxSettings);

                $.ajax(ajaxSettings);
            } else {
                // Show step
                this._transitPage(idx);
            }
            return true;
        },
        _transitPage: function (idx) {
            var mi = this;
            // Get current step elements
            var curTab = this.steps.eq(this.current_index);
            var curPage = curTab.length > 0 ? $(curTab.attr("href"), this.main) : null;
            // Get step to show elements
            var selTab = this.steps.eq(idx);
            var selPage = selTab.length > 0 ? $(selTab.attr("href"), this.main) : null;
            // Get the direction of step navigation
            var stepDirection = '';
            if (this.current_index !== null && this.current_index !== idx) {
                stepDirection = this.current_index < idx ? "forward" : "backward";
            }

            var stepPosition = 'middle';
            if (idx === 0) {
                stepPosition = 'first';
            } else if (idx === this.steps.length - 1) {
                stepPosition = 'final';
            }

            this.options.transitionEffect = this.options.transitionEffect.toLowerCase();
            this.pages.finish();
            if (this.options.transitionEffect === 'slide') {
                // normal slide
                if (curPage && curPage.length > 0) {
                    curPage.slideUp('fast', this.options.transitionEasing, function () {
                        selPage.slideDown(mi.options.transitionSpeed, mi.options.transitionEasing);
                    });
                } else {
                    selPage.slideDown(this.options.transitionSpeed, this.options.transitionEasing);
                }
            } else if (this.options.transitionEffect === 'fade') {
                // normal fade
                if (curPage && curPage.length > 0) {
                    curPage.fadeOut('fast', this.options.transitionEasing, function () {
                        selPage.fadeIn('fast', mi.options.transitionEasing, function () {
                            $(this).show();
                        });
                    });
                } else {
                    selPage.fadeIn(this.options.transitionSpeed, this.options.transitionEasing, function () {
                        $(this).show();
                    });
                }
            } else {
                if (curPage && curPage.length > 0) {
                    curPage.hide();
                }
                selPage.show();
            }
            // Change the url hash to new step
            this._setURLHash(selTab.attr("href"));
            // Update controls
            this._setAnchor(idx);
            // Set the buttons based on the step
            this._setButtons(idx);
            // Fix height with content
            this._fixHeight(idx);
            // Update the current index
            this.current_index = idx;

            // Trigger "showStep" event
            this._triggerEvent("showStep", [selTab, this.current_index, stepDirection, stepPosition]);
            return true;
        },
        _setAnchor: function (idx) {
            // Current step anchor > Remove other classes and add done class
            this.steps.eq(this.current_index).parent('li').removeClass("active");
            if (this.options.anchorSettings.markDoneStep !== false && this.current_index !== null) {
                this.steps.eq(this.current_index).parent('li').addClass("done");
                if (this.options.anchorSettings.removeDoneStepOnNavigateBack !== false) {
                    this.steps.eq(idx).parent('li').nextAll().removeClass("done");
                }
            }

            // Next step anchor > Remove other classes and add active class
            this.steps.eq(idx).parent('li').removeClass("done").addClass("active");
            return true;
        },
        _setButtons: function (idx) {
            // Previous/Next Button enable/disable based on step
            if (!this.options.cycleSteps) {
                if (0 >= idx) {
                    $('.sw-btn-prev', this.main).addClass("disabled");
                } else {
                    $('.sw-btn-prev', this.main).removeClass("disabled");
                }
                if (this.steps.length - 1 <= idx) {
                    $('.sw-btn-next', this.main).addClass("disabled");
                } else {
                    $('.sw-btn-next', this.main).removeClass("disabled");
                }
                //disable next at step 2
                if (1 == idx) {
                    $('.sw-btn-next', this.main).addClass("disabled");
                }
                //disabel next at step 3
                if (2 == idx) {
                    $('.sw-btn-next', this.main).addClass("disabled");
                }
            }
            return true;
        },

        // HELPER FUNCTIONS

        _keyNav: function (e) {
            var mi = this;
            // Keyboard navigation
            switch (e.which) {
                case 37:
                    // left
                    mi._showPrevious();
                    e.preventDefault();
                    break;
                case 39:
                    // right
                    mi._showNext();
                    e.preventDefault();
                    break;
                default:
                    return; // exit this handler for other keys
            }
        },
        _fixHeight: function (idx) {
            // Auto adjust height of the container
            if (this.options.autoAdjustHeight) {
                var selPage = this.steps.eq(idx).length > 0 ? $(this.steps.eq(idx).attr("href"), this.main) : null;
                this.container.finish().animate({ minHeight: selPage.outerHeight() }, this.options.transitionSpeed, function () {});
            }
            return true;
        },
        _triggerEvent: function (name, params) {
            // Trigger an event
            var e = $.Event(name);
            this.main.trigger(e, params);
            if (e.isDefaultPrevented()) {
                return false;
            }
            return e.result;
        },
        _setURLHash: function (hash) {
            if (this.options.showStepURLhash && window.location.hash !== hash) {
                window.location.hash = hash;
            }
        },
        _loader: function (action) {
            switch (action) {
                case 'show':
                    this.main.addClass('sw-loading');
                    break;
                case 'hide':
                    this.main.removeClass('sw-loading');
                    break;
                default:
                    this.main.toggleClass('sw-loading');
            }
        },

        // PUBLIC FUNCTIONS

        theme: function (v) {
            if (this.options.theme === v) {
                return false;
            }
            this.main.removeClass('sw-theme-' + this.options.theme);
            this.options.theme = v;
            this.main.addClass('sw-theme-' + this.options.theme);
            // Trigger "themeChanged" event
            this._triggerEvent("themeChanged", [this.options.theme]);
        },
        next: function () {
            this._showNext();
        },
        prev: function () {
            this._showPrevious();
        },
        reset: function () {
            // Trigger "beginReset" event
            if (this._triggerEvent("beginReset") === false) {
                return false;
            }

            // Reset all elements and classes
            this.container.stop(true);
            this.pages.stop(true);
            this.pages.hide();
            this.current_index = null;
            this._setURLHash(this.steps.eq(this.options.selected).attr("href"));
            $(".sw-toolbar", this.main).remove();
            this.steps.removeClass();
            this.steps.parents('li').removeClass();
            this.steps.data('has-content', false);
            this.init();

            // Trigger "endReset" event
            this._triggerEvent("endReset");
        },
        stepState: function (stepArray, state) {
            var mi = this;
            stepArray = $.isArray(stepArray) ? stepArray : [stepArray];
            var selSteps = $.grep(this.steps, function (n, i) {
                return $.inArray(i, stepArray) !== -1; //  && i !== mi.current_index
            });
            if (selSteps && selSteps.length > 0) {
                switch (state) {
                    case 'disable':
                        $(selSteps).parents('li').addClass('disabled');
                        break;
                    case 'enable':
                        $(selSteps).parents('li').removeClass('disabled');
                        break;
                    case 'hide':
                        $(selSteps).parents('li').addClass('hidden');
                        break;
                    case 'show':
                        $(selSteps).parents('li').removeClass('hidden');
                        break;
                    case 'error-on':
                        $(selSteps).parents('li').addClass('danger');
                        break;
                    case 'error-off':
                        $(selSteps).parents('li').removeClass('danger');
                        break;
                }
            }
        },
        handleFormSumbit : function(si){
            if(si != 1) return this._showStep(si);
            
            const formError = document.querySelector('#formError')
            formError.style.display = 'none';
            this.displayLoader(true);
            //collect form data
            this.collectData((isValid,data) => {
                if(isValid){
                    localStorage.formData = JSON.stringify(data)
                    const payload = data
                    this.handleData(payload,si)
                }else{
                    const formError = document.querySelector('#formError')
                    const errorField = document.querySelector('#errorField')
                    errorField.innerHTML = "Missing Required Fields"
                    formError.style.display = 'block';
                    this.displayLoader(false)


                }
            });
            

    
    
    
        },
        handleData : function(payload,si){
            if(si != 1) return this._showStep(si);
            this.getPriceList(undefined,(success,priceList) => {
                if(!success){

                    const formError = document.querySelector('#formError')
                    const errorField = document.querySelector('#errorField')
                    errorField.innerHTML = "An error has occured, please try again"
                    formError.style.display = 'block';
                    return this.displayLoader(false)
                }else{
                    this.getCategories(payload).then( data => {
                            this.processData(data.Availability,priceList,payload).then(categories => {
                                
                                this.templating(categories).then( () => {
                                    const formError = document.querySelector('#formError')
                                    formError.style.display = 'none';
                                    this.displayLoader(false)    
                                    return this._showStep(si);
                                })
                                .catch( ex => {
                                    console.log(ex);
                                    const formError = document.querySelector('#formError')
                                    const errorField = document.querySelector('#errorField')
                                    errorField.innerHTML = ex
                                    formError.style.display = 'block';
                                    return this.displayLoader(false)   
                                })
                            })
                            .catch( ex => {
                                console.log(ex);
                                const formError = document.querySelector('#formError')
                                const errorField = document.querySelector('#errorField')
                                errorField.innerHTML = "an Error has occured, please try again"
                                formError.style.display = 'block';
                                return this.displayLoader(false)   
                            })
                        // this.displayLoader(false)
                        // this._showStep(si);
                    })
                    .catch( ex => {
                        console.log(ex);
                        const formError = document.querySelector('#formError')
                        const errorField = document.querySelector('#errorField')
                        errorField.innerHTML = "an Error has occured, please try again"
                        formError.style.display = 'block';
                        return this.displayLoader(false)
                    })
                }
            })
        },
        displayLoader : function(display){
            const wizzard = document.querySelector('#smartwizard');
            const loader = document.querySelector('#smartLoader');
            if(display){
                wizzard.style.display = 'none';
                loader.style.display = 'block';
            }else{
                loader.style.display = 'none';
                wizzard.style.display = 'block';
            }


        },
        collectData : function(callback){
            const inputs = $('#searchCar input').add($('#searchCar select')) 
            const data = {};
            for ( var i = 0; i<inputs.length ; i++){
                const input = inputs[i];
                if(input.tagName == 'SELECT'){
                    for(var a=0;a<input.childNodes.length; a++){
                        const option = input.childNodes[a];
                        if(option.selected){
                            data[input.name] = option.value;
                        }
                    }
                }else{
                    
                data[input.name] = input.value;
                }
            }
           
            this.validateData(data,(isValid)=>{
                if(isValid){
                    callback(true,data)
                }else{
                    
                callback(false)
                }
            })

        },
        validateData : function(data,callback){
            const cities = Object.keys(locationCharges);
            if(cities.indexOf(data.pickUpLocation) == -1) return callback(false)
            if(cities.indexOf(data.DropOffLocation) == -1) return callback(false)


            if(formDefaults.indexOf(data.StartTime) != -1) return callback(false)
            if(formDefaults.indexOf(data.EndTime) != -1) return callback(false)



            if(new Date(data.EndDate) == 'Invalid Date') return callback(false)
            if(new Date(data.StartDate) == 'Invalid Date') return callback(false)
            if(data.EndTime.length < 0) return callback(false)
            if(data.StartTime.length < 0) return callback(false)
            return callback(true)
        },
        getPriceList :function(payload,callback){
            this.clientRequest(endpoints.getPricelist,payload,'GET').then( prices => callback(true,prices))
            .catch( ex => {
                console.log(ex);
                return callback(false);
            })
        },
        getCategories : function(payload){
            return new Promise((resolve,reject) => {
                this.clientRequest(endpoints.getCategories,payload,'POST').then( categories => resolve(categories))
                .catch( ex => {
                    console.log(ex);
                    return reject(false);
                })
            })

        },
        clientRequest : function(endpoint,data,method){
            return new Promise((resolve,reject) => {
                const options = {};
                if(data) options.body = JSON.stringify(data);
                options.headers = {};
                if(data) options.headers['Content-Type'] = 'application/json';
                options.method = method.toUpperCase();
    
                fetch(endpoint,options).then(res => res.json())
                .then(data => resolve(data))
                .catch( ex => {
                    console.log('Api request Failed: ',ex);
                    return reject(ex);
                })
            })
        },
        processData : function(data,pricelist,payload){
            return new Promise((resolve,reject) => {
                //choosing a pricelist
                const { pickUpLocation,DropOffLocation,StartTime,EndTime } = payload;
                const categories = []
                for(var i = 0 ; i < pricelist.length; i++){
                    
                    const price = pricelist[i];
                    if(price.CodeNumber =='WEB'){
                    if( price.CodeNumber == 'WEB' && new Date(payload.StartDate).getTime() > new Date(price.StartDate).getTime() && new Date(price.EndDate).getTime() > new Date(payload.EndDate).getTime() ){
                        const rentalPeriod = this.daysBetweenDates(payload.EndDate,payload.StartDate);
                        //period between rental startDate and priclist endDate
                        const endPeriod = this.daysBetweenDates(price.EndDate, payload.StartDate);
                        //checks whether the users rental period overlaps the into a second priclist
                        if(rentalPeriod > endPeriod){
                            const leftPeriod = rentalPeriod - endPeriod;
                            const price2 =pricelist[i+1];
                            for(var a =0 ; a<price.Pricings.length; a++ ){
                                let pricing = price.Pricings[a];
                                let carCategoryId = pricing.CarCategoryId;
                                for(var c = 0;c<data.length;c++){
                                    const car = data[c];
                                    if(car.CarCategoryId == carCategoryId){
                                    car.extras = price.Extras

                                        for(var key in pricing ){
                                            var totalCharges = 0;
                                            if(pricing.hasOwnProperty(key)){
                                                if(key.indexOf('PriceDay') > -1){
                                                    const keyArr = key.split('')
                                                    if(parseInt(keyArr[keyArr.length-1])<=endPeriod){
                                                        totalCharges += pricing[key]
                                                    }
                                                }

                                            }
                                        }
                                    }
                                    car.totalCharges += locationCharges[pickUpLocation] + locationCharges[DropOffLocation]

                                    car.totalCharges = totalCharges;


                                }
                            }
                            for(var k =0 ; k<price2.Pricings.length; k++ ){
                                pricing = price2.Pricings[k];
                                carCategoryId = pricing.CarCategoryId;
                                for(var h = 0;h < data.length;h++){
                                    if(car.CarCategoryId == carCategoryId){
                                        for(var key in pricing ){
                                            var totalCharges = 0;
                                            if(pricing.hasOwnProperty(key)){
                                                if(key.indexOf('PriceDay') > -1){
                                                    const keyArr = key.split('')
                                                    if(parseInt(keyArr[keyArr.length-1])<=leftPeriod){
                                                        totalCharges += pricing[key]
                                                    }
                                                }

                                            }
                                        }
                                    }
                                    car.totalCharges += locationCharges[pickUpLocation] + locationCharges[DropOffLocation]  + this.timeCharge(StartTime,EndTime,pricing)

                                    categories.push(car);


                                }

                            }
                        }else{
                            //making use of one pricelist
                            
                            for(var a =0; a<price.Pricings.length; a++ ){
                                
                                const pricing = price.Pricings[a];
                                const carCategoryId = pricing.CarCategoryId;
                                for(var p = 0; p<data.length;p++){
                                    
                                        
                                    const car = data[p];
                                    if(car.CarCategoryId == carCategoryId){
                                    car.totalCharges = 0;
                                    car.extras = price.Extras
                                        for(var key in pricing ){
                                            if(pricing.hasOwnProperty(key)){
                                                if(key.indexOf('PriceDay') > -1){
                                                    const keyArr = key.split('PriceDay')
                                                    if(parseInt(keyArr[1])<=rentalPeriod){
                                                        car.totalCharges += pricing[key]
                                                    }
                                                }

                                            }
                                        }
                                    car.totalCharges += locationCharges[pickUpLocation] + locationCharges[DropOffLocation] + this.timeCharge(StartTime,EndTime,pricing)
                                    categories.push(car);
                                    }
                                }

                            }
                        }
                    }
                }
                    
                }
                return resolve(categories);
            })
        },
        timeCharge :function(startTime,endTime,price){
            const {PriceDay1} = price
            startTime = startTime.split(':');
            endTime = endTime.split(':');
            const endMins = (parseInt(endTime[0])*60)+ parseInt(endTime[1])
            const startMins = (parseInt(startTime[0])*60)+ parseInt(startTime[1])
            const hoursbtwn = Math.round((endMins-startMins)/60);
            
            if(hoursbtwn < 2) return 0
            if(hoursbtwn < 4 ) return Math.round(0.25 * PriceDay1);
            return Math.round(PriceDay1)
        },
        daysBetweenDates : function(date1,date2){
            //one dat in milliseconds
            const oneDay = 1000*60*60*24;
            //convert inputs in milliseconds
            const date1Ms = new Date(date1).getTime();
            const date2Ms = new Date(date2).getTime();
            //difference in millimeters
            const difference  = date1Ms - date2Ms;
            //convert back to days
            return Math.round(difference/oneDay);
        },
        addExtras : function(){
            //adding eventListeners to the get this car button
            const getCarbtns = document.querySelectorAll(".get-car");
            for(var i = 0; i< getCarbtns.length; i++){
                let car = getCarbtns[i];
                car.addEventListener('click',e=>{
                    const selectedCar = {}
                     const carCategoryId = e.target.children[0].value
                     const carSelector = ".car-"+carCategoryId.toString()
                     const carHtml = document.querySelector(carSelector)
                     const category = document.querySelector(carSelector+ " .car-cate")
                     const CarModelId = document.querySelector(carSelector+ " .car-model-id").value;
                     const extras = document.querySelectorAll(carSelector+ " input[type ='checkbox']")
                    console.log(extras)
                     const carMake = document.querySelector(carSelector+" .makeHeader").innerHTML
                     const totalCharge = document.querySelector(carSelector+" .total-charge").children[0].value
                     selectedCar.make = carMake;
                     selectedCar.category = category.value
                     selectedCar.carCategoryId = carCategoryId;
                     selectedCar.CarModelId = CarModelId;
                     var { total, selectedExtras } = this.calculateExtras(extras);
                     selectedCar.totalCharge = parseInt(totalCharge) + total;
                     selectedCar.extras = {
                         total,
                         selectedExtras
                     }
                     selectedCar.pickupDetails = JSON.parse(localStorage.formData)
                     localStorage.selectedCar = JSON.stringify(selectedCar);
                    this._showNext()
                })
            } 
        },
        calculateExtras : function(extras){
            const {StartDate,EndDate} = JSON.parse(localStorage.formData);
            var daysBtwn = this.daysBetweenDates(EndDate,StartDate);
            localStorage.rentalPeriod = JSON.stringify(daysBtwn)
            var extraCharges = 0;
            var selectedExtras = []
            for( var i = 0; i < extras.length; i++){
               let {name, value,checked } = extras[i];
               value = parseInt(value)
               if(checked){
                   selectedExtras.push(name)
                   if(extraChargeRate.indexOf(name) == -1){
                    extraCharges += value;
                   }else{
                    if(name == "label_4"){
                        if(daysBtwn>6){
                            value = value* 6
                        }else{
                            value = value * daysBtwn
                            extraCharges += value
                        }
                    }else{
                        if(daysBtwn>10){
                            value = value* 10
                        }else{
                            value = value * daysBtwn
                            extraCharges += value
                        }
                    }
                   }
               }
            }
            extraCharges = Math.round(extraCharges)
            return {total :extraCharges,selectedExtras}
        },
        templating : function(categories){
            return new Promise((resolve,reject) => {
                if(categories.length == 0 ) return reject("sorry! a car matching you requirements was not found")
                // const resultsContainer = document.querySelector('#searchResults');
                const chargeEntries = document.querySelectorAll(".total-charge");
                for( var i = 0; i < chargeEntries.length; i++){
                    let entry = chargeEntries[i]
                    var cateId = parseInt(entry.id);
                    for( var a = 0; a<categories.length; a++){
                        let cate = categories[a]
                        if(cate.CarCategoryId == cateId){
                            
                            entry.children[0].value = cate.totalCharges;
                            entry.children[1].innerHTML = cate.totalCharges.toString() + "€"
                        }
                    }
                    
                }
                this.addExtras()
                // for(var i = 0 ; i < categories.length; i++){
                //     const carData = categories[i]
                //     const result = document.createElement('div');
                //     result.classList += "row  border-bottom shadow rounded";
                //     //let {car,extras } = templates;
                //     console.log(carData)
                //     var extraString = '';
                //     // for( var v = 0; v< carData.extras.length; v++){
                //     //     let extra = extras;
                //     //     let extraData = carData.extras[v];
                //     //     for (var key in extraData){
                //     //         if(extraData.hasOwnProperty(key)){
                //     //             extra = extra.replace('{'+key+'}',extraData[key])
                //     //         }
                //     //     }
                //     //     extraString+=extra;
                //     // }
                //     for (var key in carData ){
                //         if(carData.hasOwnProperty(key)){
                //             //car = car.replace('{'+key+'}',carData[key]);
                //             // car = car.replace('{extrasBlock}',extraString);
                //         }

                //     }
                //     // car = new DOMParser().parseFromString(car, "text/html");
                //     // console.log(car)
                //     //$(result).html(car)
                //     let theCar = carCard()
                //     console.log(theCar)
                //     resultsContainer.appendChild(theCar);
                // }

                //TEMPLATING ALTERNATIVE




                lib.translateDecriptions()
                $(".btnInfo").tooltip()
                var skata = "Pick up location";
    
                resolve();
            })
        }
    
    });

    // Wrapper for the plugin
    $.fn.smartWizard = function (options) {
        var args = arguments;
        var instance;

        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, "smartWizard")) {
                    $.data(this, "smartWizard", new SmartWizard(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            instance = $.data(this[0], 'smartWizard');

            if (options === 'destroy') {
                $.data(this, 'smartWizard', null);
            }

            if (instance instanceof SmartWizard && typeof instance[options] === 'function') {
                return instance[options].apply(instance, Array.prototype.slice.call(args, 1));
            } else {
                return this;
            }
        }
    };

    //form submission processes





})(jQuery, window, document);
