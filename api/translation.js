//Tranlation function and Processes


//container of the module
const lib = {};





// lib.endpoint = ""

// lib.getLanguages = function(){
//     if(localStorage.languages){
//         const stringCollection = localStorage.languages;
//         try{
//             const parsedLanguages = JSON.parse(stringCollection);
//             return parsedLanguages;
//         }catch(ex){
//             console.log('failed to parse languages from the localstorage');
//              return lib.requestLanguages;
//         }
//     }
// }

// lib.requestLanguages = function(){
//     fetch(lib.endpoint).then( res => res.json())
//     .then( data => {
//         const stringData = JSON.stringify(data);
//         localStorage.languages = stringData;
//         return data;
//     })
//     .catch( () => {
//         console.log('failed to get languages');
//         return {}
//     })
// }

//Components
// const components = {};

// components.formNav = function(){
//     const nav = document.querySelectorAll('#smartwizard ul a');
//     for ( var i=0;i<nav.length;i++){

//     }
//     console.log(nav)
// }











//translation init function
lib.init = () => {
   // components.formNav();
   lib.changeLanguage()
   lib.inputValueDisplay()
}

lib.changeLanguage = () => {
    const button = document.querySelector('#changeLanguage');
    // console.log(button)
    if(button != null ){
        button.addEventListener('click',e => {
            const lang = e.target.id;
            console.log(lang)
            switch(lang){
                case "English":
                    localStorage.language = "English"
                    break
                case "Greek":
                    localStorage.language = "Greek"
                    break
                case "German":
                    localStorage.language = "German"
                    break
                default:
                localStorage.language = "English"
                
            }
            if(window.location != '/' || window.location != '') window.location = "/step1.html#step-1"
            location.reload()
        })
    }
}

lib.inputValueDisplay = () => {
    const startDate = document.querySelector("#startDate");
    const timePicker = document.querySelector("#timepicker");
    const endDate = document.querySelector("#endDate");
    const timeDrop = document.querySelector("#timeDrop");
 if(startDate && timeDrop && endDate && timePicker){
    startDate.value = lib.translator("Pick_Up_Date")
    timePicker.value = lib.translator("pick_up_time")
    endDate.value = lib.translator("Drop_off_date")
    timeDrop.value = lib.translator("Drop_off_time")
}
}

lib.translateDecriptions = function(){
    for ( var i = 0 ; i<14; i++){
        let selector = "description_"+i
        const descrips = document.querySelectorAll("."+selector);

        if(descrips){
            for( var a = 0; a<descrips.length; a++){
                const element = descrips[a];
                element.title = lib.translator(selector);
                
            }
        }
    }
}



lib.translator =  function(word){
    const language = localStorage.language;
    const wordList = languages;
    switch(language){
        case "English":
            for(var key in wordList ){
                if(wordList.hasOwnProperty(key)){
                    if( key == word ){
                        return wordList[key][0];
                        break;
                    } 
                }
            }
        case "Greek":
            for(var key in wordList ){
                if(wordList.hasOwnProperty(key)){
                    if( key == word ){
                        return wordList[key][1];
                        break;
                    } 
                }
            }
            
        case "German":
        for(var key in wordList ){
            if(wordList.hasOwnProperty(key)){
                if( key == word ){
                    return wordList[key][2];
                    break;
                } 
            }
        }
        default:
            return word
    }
}




window.onload = () => {
    lib.init();
    
}