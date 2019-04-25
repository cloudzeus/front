
           //Menu actions to specific sections
           
           var menuLanguage = localStorage.language;
            var languageUrl;
            if(menuLanguage ==='Greek'){
               languageUrl = 'https://breezerentals.gr/GR.html';
               document.querySelector('#aboutusURLS').setAttribute('href', 'https://breezerentals.gr/GR.html#aboutus');
               document.querySelector('#aboutusURL').setAttribute('href', 'https://breezerentals.gr/GR.html#aboutus');
               document.querySelector('#our-teamURLS').setAttribute('href', 'https://breezerentals.gr/GR.html#our-team');
               document.querySelector('#our-teamURL').setAttribute('href', 'https://breezerentals.gr/GR.html#our-team');
               document.querySelector('#our-featureURLS').setAttribute('href', 'https://breezerentals.gr/GR.html#our-feature');
               document.querySelector('#our-featureURL').setAttribute('href', 'https://breezerentals.gr/GR.html#our-feature');
               document.querySelector('#portfolio-xeURLS').setAttribute('href', 'https://breezerentals.gr/GR.html#portfolio-xe');
               document.querySelector('#portfolio-xeURL').setAttribute('href', 'https://breezerentals.gr/GR.html#portfolio-xe');
               document.querySelector('#our-testimonialURLS').setAttribute('href', 'https://breezerentals.gr/GR.html#our-testimonial');
               document.querySelector('#our-testimonialURL').setAttribute('href', 'https://breezerentals.gr/GR.html#our-testimonial');
               document.querySelector('#contactusURLS').setAttribute('href', 'https://breezerentals.gr/GR.html#contactus');
               document.querySelector('#contactuslURL').setAttribute('href', 'https://breezerentals.gr/GR.html#contactus');
               console.log(languageUrl);
            }else if(menuLanguage ==='English'){
               languageUrl='https://breezerentals.gr/index.html';
               document.querySelector('#aboutusURLS').setAttribute('href', 'https://breezerentals.gr/index.html#aboutus');
               document.querySelector('#aboutusURL').setAttribute('href', 'https://breezerentals.gr/index.html#aboutus');
               document.querySelector('#our-teamURLS').setAttribute('href', 'https://breezerentals.gr/index.html#our-team');
               document.querySelector('#our-teamURL').setAttribute('href', 'https://breezerentals.gr/index.html#our-team');
               document.querySelector('#our-featureURLS').setAttribute('href', 'https://breezerentals.gr/index.html#our-feature');
               document.querySelector('#our-featureURL').setAttribute('href', 'https://breezerentals.gr/index.html#our-feature');
               document.querySelector('#portfolio-xeRLS').setAttribute('href', 'https://breezerentals.gr/index.html#portfolio-xe');
               document.querySelector('#portfolio-xeURL').setAttribute('href', 'https://breezerentals.gr/index.html#portfolio-xe');
               document.querySelector('#our-testimonialRLS').setAttribute('href', 'https://breezerentals.gr/index.html#our-testimonial');
               document.querySelector('#our-testimonialURL').setAttribute('href', 'https://breezerentals.gr/index.html#our-testimonial');
               document.querySelector('#contactusRLS').setAttribute('href', 'https://breezerentals.gr/index.html#contactus');
               document.querySelector('#contactusURL').setAttribute('href', 'https://breezerentals.gr/index.html#contactus');
               console.log(languageUrl);
            }else if (menuLanguage ==='German'){
               languageUrl = 'https://breezerentals.gr/German.html';
               console.log(languageUrl);
            }
            console.log('languageURL is '+ languageUrl);
            $('#aboutusURLS').on("click",function(){
               $(location).href(languageUrl+'#aboutus');
              
               var testUrl = $(location).href(languageUrl+'#aboutus').val();
               console.log(testUrl);
              
            });
            $('#aboutusURL').on("click",function(){
               $(location).href(languageUrl+'#aboutus');
               $("#aboutusURL").attr("href", languageUrl+"#aboutus");
            });
            $('#our-teamURLS').on("click",function(){
               $(location).href(languageUrl+'#our-team');
            });
            $('#our-teamURL').on("click",function(){
               $(location).href('#our-team');
            });
            $('#our-featureURLS').on("click",function(){
               $(location).href(languageUrl+'#our-feature');
            });
            $('#our-featureURL').on("click",function(){
               $(location).href(languageUrl+'#our-feature');
            });
            $('#portfolio-xeURLS').on("click",function(){
               $(location).href(languageUrl+'#aboutus');
            });
            $('#portfolio-xeURL').on("click",function(){
               $(location).href(languageUrl+'l#aboutus');
            });
            $('#our-testimonialURLS').on("click",function(){
               $(location).href(languageUrl+'#aboutus');
            });
            $('#our-testimonialURL').on("click",function(){
               $(location).href(languageUrl+'#aboutus');
            });
            $('#aboutusURLS').on("click",function(){
               $(location).href(languageUrl+'#aboutus');
            });
            $('#aboutusURL').on("click",function(){
               $(location).href(languageUrl+'#aboutus');
            });
