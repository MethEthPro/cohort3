// this is how we import modules/libraries or whatever in javascript
// using require 
const fs=require("fs");
// console.log(fs);
const contents = fs.readFile("my_text.txt","utf-8"); //asynchronously
console.log(contents);

const content2=fs.readFileSync("my_text_2.txt","utf-8"); //synchronously , this is obviously better
console.log(content2);


// now here we learn , functional arguments ,how we pass function as arguments to another function
function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
//   here we are passing a function to another function as an argument
  function doOperation(a, b, op) {
    return op(a, b)
  }
  
  console.log(doOperation(1, 2, sum))