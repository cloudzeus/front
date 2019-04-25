function clientRequest(endpoint,data,method){
    return new Promise((resolve,reject) => {
        const options = {};
        if(data) options.body = JSON.stringify(data);
        options.headers = {};
        options.headers['Content-Type'] = 'application/json';
        options.method = method.toUpperCase();

        fetch(endpoint,options).then(res => res.json())
        .then(data => resolve(data))
        .catch( ex => {
            console.log('Api request Failed: ',ex);
            return reject(ex);
        })
    })
}

function displayLoader(display){
    const wizzard = document.querySelector('#smartwizard');
    const loader = document.querySelector('#smartLoader');
    if(display){
        wizzard.style.display = 'none';
        loader.style.display = 'block';
    }else{
        loader.style.display = 'none';
        wizzard.style.display = 'block';
    }


}

function dateTimeDisplayer(){
    console.log(JSON.parse(localStorage.formData))
    var { StartDate,StartTime,EndTime,EndDate,pickUpLocation,DropOffLocation} = JSON.parse(localStorage.formData);

    var startMinutes = (parseInt(StartTime.split(":")[0]) * 60 ) + parseInt(StartTime.split(":")[1])
    var endMinutes = (parseInt(EndTime.split(":")[0]) * 60 ) + parseInt(EndTime.split(":")[1])

    var startDateString = new Date(StartDate+" "+StartTime).toUTCString()
    var  endDateString = new Date(EndDate+" "+EndTime).toUTCString()

    //the nodes
    var pickupHeader = document.querySelector(".pickupHeader")
    var pickupDate = document.querySelector(".pickupDate")
    var dropOffDate = document.querySelector("..dropOffDate")
    var dropOffHeader = document.querySelector("..dropOffHeader")

    pickupHeader.innerHTML = lib.translator(pickUpLocation.split(" ").join("_"))+ ":"
    dropOffHeader.innerHTML = lib.translator(DropOffLocation.split(" ").join("_"))+ ":"

    pickupDate.innerHTML = startDateString
    dropOffDate.innerHTML = endDateString
}



//autocomplete dropoff location

function autoDropOff(){
    const pickUplocationInput = document.querySelector("#pickUpLocation");
    const dropOfLocationInput = document.querySelector("#DropOfLocation");
    pickUplocationInput.addEventListener('change', e=> {
        dropOfLocationInput.selectedIndex = pickUplocationInput.selectedIndex;

    })

}


//Random string Generator
function makeId() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 15; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


 //Get Complete booking details

 function completeBooking(){
     var locationHash = window.location.hash;
     var token = localStorage.bookingToken ? localStorage.bookingToken : false;
     if(!(locationHash == '#step-4' && token)) return;
     console.log("debugger")
     clientRequest(endpoints.completeBookingDetails + token,undefined,'GET').then( completeBookingDetails => {
         console.log(completeBookingDetails)
         localStorage.completeBookingDetails = JSON.stringify(completeBookingDetails);
     })
     .catch( ex => console.log(ex))
     
 }


