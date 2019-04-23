var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',hour:'numeric',minute:'numeric',second:'numeric' }; 
var locales = [];
if(localStorage.language == 'Greek'){
    locales.push('el-gr');
}else{
    locales.push('en-US');
}
locales.push('en-US');