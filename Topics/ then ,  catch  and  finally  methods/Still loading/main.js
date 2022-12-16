function loader(value) {
    const promise = new Promise(function(resolve, reject){
        if (value === "true"){
            resolve("The info has loaded.");

        } else {
            reject("Please, try again later.");

        }

    });

    return promise.then(console.log)
        .catch(console.log)
        .finally(() => console.log('Hello, Mr. Smith!'));

    // return promise.then(data => console.log(data))
    //     .catch(error => console.log(error))
    //     .finally(() => console.log("Hello, Mr. Smith!"));
    // ;
}

// let promise = loader("true");
// promise.then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Hello, Mr. Smith!"));
