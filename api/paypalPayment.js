const paypalConfig = {
    clientId : ""
}

function validateCheckoutForm(formId){
    return new Promise((resolve,reject) => {
        const selector = "#" +  formId + " input";
        const aggreed = document.querySelector("#terms").checked ? true : false;
        if(!aggreed) return reject(aggreed);
        //proceed to get the other form inputs
        const inputs = document.querySelectorAll(selector);
        const userDetails = {paymentType:'paypal'};

        for(var i = 0; i<inputs.length; i++){
            const input  = inputs[i];
            if(input.type != 'checkbox' && input.type != "radio") {
                if(!input.value) return reject(input.id)
                userDetails[input.name] = input.value;
            }
        }
        localStorage.userDetails = JSON.stringify(userDetails);
        return resolve(userDetails);
    })
}

  