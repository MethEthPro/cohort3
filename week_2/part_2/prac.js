const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
  
    if (success) {
      resolve("I kept my promise! 🎉");
    } else {
      reject("I broke my promise. 😢");
    }
  });
myPromise
.then((message) => {
console.log(message); // "I kept my promise! 🎉"
})
.catch((error) => {
console.log(error); // "I broke my promise. 😢"
});
