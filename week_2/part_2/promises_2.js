function random(){

}

function callback(){
    console.log("promise completed");
}

let p = new Promise(random);
p.then(callback);
