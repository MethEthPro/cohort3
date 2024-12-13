// creating a promise 
const myPromise = new Promise(function (resolve, reject) {
  // Simulating an asynchronous operation with setTimeout
  setTimeout(function () {
      const success = true; // Change to false to simulate rejection
      if (success) {
          resolve("Operation was successful!");
      } else {
          reject("Operation failed.");
      }
  }, 1000);
});

// consuming a promise
myPromise
    .then(function (result) {
        console.log("Fulfilled:", result); // Output: "Fulfilled: Operation was successful!"
    })
    .catch(function (error) {
        console.log("Rejected:", error); // Output: "Rejected: Operation failed."
    });
