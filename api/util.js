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