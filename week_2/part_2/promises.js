function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
// this function returns a object of the promise class

function callback(){
    console.log("3 seconds have passsed");
}

setTimeoutPromisified(3000).then(callback);