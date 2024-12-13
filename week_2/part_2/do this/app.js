// watch shradha khapra video on promises , 
// harkirat ne khuch khass acha nahi padhaya 
// https://youtu.be/d3jXofmQm44?si=audZ3JF27dVc1I9M
// get comfortable woth arrow functions first



// -----------------


// function hello(){
//     console.log("hello");
// }

// setTimeout(hello,5000);

// writing this is same as writing 

// setTimeout(()=>{
//     console.log("hello");

// },5000)


// ------------------




// now as this is async 
// both process start and finish at same time , so after 5 sec
// we see 2 hellos



// callback
// when we pass a function as an argument to another function 
// e.g in setTimeout we take another function as an argument

// CALLBACK HELL
// lets try to make a very simple database replica
// it takes a dataid and returns some data
// lets assume it takes 2 seconds to get the data back
// to replicate it we will create a setTimeout of 2sec

// -------------------

// function getData(dataid){
//     setTimeout(()=>{
//         console.log("data",dataid)
//     },2000);
// }

// getData(1);

// --------------------

// now lets say after we have got our first data , then 
// we want the next data 
// that is after 2 seconds we got our first data , after that we
// will again have delay of 2sec and then get our 2nd data
// then we make something like this , where we have callbacks 

// -------------------------------------

// function getData(dataid, getNextData){
//     setTimeout(()=>{
//         console.log("data",dataid);
//         if(getNextData){
//             getNextData();
//         }
        
//     },2000);
// }
// getData(1,()=>{
//     getData(2);
// })

// --------------------------------------

// this is the correct way to call,dont do getData(1,getData(2))


// understand the code flow here
// getData(1,our function)  --->  2 sec wait --->
// console.log("data",1)--->as we passed function,if cond is true
// so our function gets called--->getData(2)--->2 sec wait--->
// console.log("data",2)--->now this time in the function call
// only data id was given and no function was there,so our if
// condition turns false ,


// similarly we can keep on increasing this nesting

// -------------------------------
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// })

// --------------------------------

// now this becomes difficult to understand and manage
// this type of nested callbacks is called Callback Hell
// it forms a pyramid structure(pyramid of doom)




// so we should use callback in our code
// but when we see that it is going towards a callback hell
// we should think about PROMISES

// a promise is initially pending and can have 2 states in 
// future either it can get resolve(fulfilled) or reject
// so it can have three states unfulfilled,rejected or resolved
// pending:the result is undefined
// resolved:the result is a value(fulfilled)  resolve(result)
// rejected:the result is an error object     reject(error)

// ---------------------------


// let promise=new Promise((resolve, reject) => {
//     console.log("hello");
//     resolve("success");
// })



// ------------------------------


// now here we again have the database replica, 
// but now insted of giving us a output after some time
// it instantly gives us a promise , which is obviously initally
// pending but later it gets fulfilled/resolved or rejected
// here we have taken an example in which it gets fulfilled


// ------------------------------

// function getData(dataid){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("success");
//         },5000);
//     });
// }


// ----------------------------
// now we have seen how to create simple promises
// now we have to learn how to use them
// we have then and catch

// promise.then((res)=>{})
// promise.cath((err)=>{})
    
// we use these ,
// if the promise is fulfilled , .then gets executed , and res 
// takes the values of whatever was inside the resolve,for eg
// here the res takes the value "success bro"


// -------------------------



// const getPromise=()=>{
//     return new Promise((resolve, reject) => {
//         console.log("i am a promise");
//         resolve("success bro")
//     })
// }

// let my_promise=getPromise();

// executed only if the promise if fulfilled
// my_promise.then((res)=>{
//     console.log("promise fulfilled",res);
// })

// executed only if the promise is rejected
// my_promise.catch((err)=>{
//     console.log("rejected",err);
// })



// -----------------------------



// now we try to understand promise chaining 

// if suppose we want some thing to only work after one thing 
// i.e some wait -->task 1-->some wait-->task 2
// this is just like what we did in callback hell
// now we will try to do this with help of promise chaining


// ----------------------------


// function getData(dataid){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("success");
//         },3000);
//     });
// }

// Promise Chain

// -------------------------
// let p1=getData(1);
// p1.then((res)=>{
//     console.log(res);
// })
// --------------------------


// this can be furthere reduced to , 
// here we just remove the unecessary p1 variable

// --------------------------

// getData(1).then((res)=>{
//     console.log(res);
// })
// ---------------------------

// now we can begin with the chaining

// -------------------

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// })

// -----------------

// we can further change it to 

// -------------------

// getData(1)
//     .then((res)=>{
//         return getData(2);
//     })
//     .then((res)=>{
//         return getData(3);
//     })
//     .then((res)=>{
//         console.log(res);
//     })


//------------------------------

// we use this instead of callback hell 
// but this is also not very easy to understand 
// so we go one step further to understand , async await



// async await 

// we make a async function 
// a async function always returns a promise

// ----------------------
// async function hello(){
//     console.log("hello");
// }
// ----------------------

// we see that when we call it in console it returns a promise
// even though we did not specify anything about a promise



// await pauses the execution of its surrounding async function
// until the promise is settled
// we can use await only inside an async function
// e.g


// 200 is the code for success


// ------------------------------------


// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000)
//     })
// }

// async function getWeatherData(){
//     await api(); // 1st call
//     await api(); // 2nd call
// }

// ---------------------------------------



// so this also works on the same principle
// till the 1st call is completed everything is on hold
// after the promise is fulfilled , i.e the call is completed
// we move on to the second call, and then again pause 
// everything 

// ----------------------------------------------

// function getData(dataid){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("success");
//         },3000);
//     });
// }

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }

// -------------------------------------------------

// now this is much easier to understand
// so this is preffered over promises and callback hell 
// async-await > promises > callback hell
// 

// there is only a slight issue , that we have to enclose
// the calls inside a async function , and then we have to call it
// to avoid the manual step of function call we can use IIFE
// IIFE stands for  "immediately invoked function expression"
// function gets immediately called as soon as it is 
// encountered 


// just remove the name of the function , enclose it in 
// parenthesis and also add an extra pair of parenthesis at end
// and then finish with semi colon 

// ----------------------------------------------


// function getData(dataid){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("success");
//         },3000);
//     });
// }

// (async function (){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// })();

// -------------------------------------------------------------


// now this has a drawback that it cant be used again 
// we will have to write the same code again if we
// want to make call somewhere else in the code