//* function for getting messages from customers nand forwarding them to info@breezerentals


//module constainer container

const contrib = {};

contrib.validate = (data) => {
    return new Promise((resolve, reject) => {
        let isValid = true
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const entry = data[key];
                if(entry.trim().length === 0){
                    const loader = document.querySelector('#smartLoader');
                    loader.style.display = 'none';

                    errorField = document.querySelector(`#${key}Error`)
                    errorField.textContent = lib.translator('requiredField')
                    errorField.style.display = 'block'
                    document.querySelector(`#${key}`).addEventListener('onfocus',evt => {
                    errorField.style.display = 'none'
                    })
                    isValid = false
                }
            }
        }
        if(!isValid) return reject('form Missing required field')
        resolve()
    });
        
};

contrib.getData = () => {
        const form = document.querySelector('#support-email');
        const loader = document.querySelector('#smartLoader');
        if(!form) return console.log('failed to grab form with id')
        form.addEventListener('submit', evt => {
            evt.preventDefault();
            form.style.display = 'none';
            loader.style.display = 'block';
            const elements = evt.target.elements;
            console.log('elements', elements)
            const data = {}
            for (let i = 0; i < elements.length; i++) {
                const entry = elements[i];
                if (entry.type !=='submit') {
                    data[entry.name] = entry.value;
    
                }
            }
            // console.log('data', data)
            contrib.validate(data).then( () => {
                contrib.sendEmail(data)
            }).catch( ex => console.log(ex))
        })
}

contrib.sendEmail = data => {
    const formMessage = document.querySelector('#formError');
    const loader = document.querySelector('#smartLoader');
    const form = document.querySelector('#support-email');


    clientRequest(endpoints.supportEmail,data,'POST').then( () => {
        const text = `<p class="text-success" >${lib.translator('messageSent')}</p>`
        formMessage.innerHTML = text;
        formMessage.style.display = 'block'
        form.style.display = 'block'
        
        loader.style.display = 'none';

        contrib.clearFormMessage ()


    })
    .catch(err => {
        console.log('err', err)
        const text = `<p class="text-danger" >${lib.translator('errorOccured')}</p>`
        formMessage.innerHTML = text;
        formMessage.style.display = 'block'
        form.style.display = 'block'
        loader.style.display = 'none';

        contrib.clearFormMessage ()

    })
}


contrib.clearFormMessage = () => {
    setTimeout(function() {
    const formMessage = document.querySelector('#formError');
    formMessage.style.display = 'none'
    }, 3000);
}


contrib.init = async () => {
    contrib.getData();

}

window.onload = () => {
    contrib.init()
}

