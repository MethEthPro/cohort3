const fs=require("fs");

// this is our function that gets executed once the readfile part is done
// err catches and error
function afterFileRead(err,content){
    if(err){
        console.log("file not found");
    }
    else{
        console.log(content);
    }
}


// now here our files are being read asynchronously that means
// we start the work and goto next line 
// and this also has a function argument 
// i.e a function is passed as an argument to another function 
// so when these operation will start and we goto next line
// and when the process is complete it will call the function afterFileRead
// this process is called callback , so when a task is completed it calls to the function
// now guess which output will come first?
fs.readFile("my_text.txt","utf-8",afterFileRead);
fs.readFile("my_text_2.txt","utf-8",afterFileRead);
// method 1
// function rand(){
//     console.log("i am a useless function");
// }
// setTimeout(rand,5000);

// method 2
setTimeout(function (){
    console.log("i am a useless function")
},
5000);
// both methods are correct to call the setTimeout async function
// but start to get comfortable with the 2nd method
// setTimeout is another asynchronous function that executes a certain function after some time
// here after 5000ms or 5sec
console.log("HELLO");

// GET AN INSIGHT ON THE ARCHITECTURE OF THE ASYNC NATURE OF JS 
// what is a call stack , web api , callback queue,event loop
// like get a broad idea

// basically if the thread is busy or occupied , i.e is the call stack is not empty
// then evn though there are tasks that have been completed and waiting in the callback queue,after being complete by the web api
// we will first complete the call stack and then the event loop check is the call stack is empty, if it is
// then it pushes the first callback from the queue onto the call stack for execturion

// 1. Call Stack
//  The call stack is a data structure that keeps track of the function calls in your program. It operates in a "Last In, First Out" (LIFO) manner, meaning the last function that was called is the first one to be executed and removed from the stack.
// When a function is called, it gets pushed onto the call stack. When the function completes, it's popped off the stack.

// 2. Web APIs
// Web APIs are provided by the browser (or the Node.js runtime) and allow you to perform tasks that are outside the scope of the JavaScript language itself, such as making network requests, setting timers, or handling DOM events.
// 3. Callback Queue 
// The callback queue is a list of tasks (callbacks) that are waiting to be executed once the call stack is empty. These tasks are added to the queue by Web APIs after they have completed their operation.
// 4. Event loop
// The event loop constantly checks if the call stack is empty. If it is, and there are callbacks in the callback queue, it will push the first callback from the queue onto the call stack for execution.



// ASSIGNMENT -
// TRY TO CREATE A PROMISIED VERSION OF
// setTimeout,fetch,fs.readFile