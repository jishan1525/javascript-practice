// 1. Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds
// using setTimeout. You can practice this question in any JS editor or your browser console.

// Your Code here

// function delayedGreeting() {
//     setTimeout(()=>{
//         console.log("Hello, welcome to my portfolio!")
//     },2000)
// }
// delayedGreeting();
// // // Hello, welcome to my portfolio!

// Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a
// delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your
// browser console.
// Your code here

// function delayedAddition(num1, num2) {
//     setTimeout(()=>{
//         console.log(num1+num2)
//     },4000)

// }
// delayedAddition(2, 3);

// Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in
// milliseconds, and displays the message in an alert box after the specified delay time using
// setTimeout. You can practice this question in any JS editor or your browser console.

// Your Code here

// function delayedAlert(message,time) {
//     setTimeout(()=>{
//         console.log(message);
//     },time)
// }

// delayedAlert('Hello, world!', 2000);

// Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times
// after a delay of 1 second each, using a for-loop and setTimeout. You can practice this question
// in any JS editor or your browser console.

// Your Code here

// function delayedLoop(num){
//     for(let i=1; i<=num;i++){
//         setTimeout(()=>{
//              console.log("Hello");
//         },i*1000)
//     }
// }
// delayedLoop(3);

// should print Hello three times after 1 second each
// Output:
// Hello -- after 1 second
// Hello -- after another 1 second
// Hello -- after another 1 second

// Make a fake fetch call that takes a message and a boolean value to get data and console the
// message received from the server. A fake fetch has been provided. You can practice this
// question in any JS editor or your browser console.

// const fakeFetch = (msg, shouldSucceed) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldSucceed) {
//         resolve(`message from server: ${msg}`);
//       } else {
//         reject(`error from server: ${msg}`);
//       }
//     }, 3000);
//   });
// };
// // Your Code here

// fakeFetch("Hi", true)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Hi -- after 3 seconds

// Use this URL - https://example.com/api/itemlist to make a fake fetch call and handle errors if
// any. Show a proper message to the user on the DOM, as per the status and message received
// from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or
// Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: [
              { itemName: "Bread", price: 30 },
              { itemName: "Water Bottle", price: 50 },
              { itemName: "Dairy Milk", price: 20 },
            ],
          },
        });
      }
    }, 2000);
  });
};
// Your Code here
let url = "https://example.com/api/itemlist";
fakeFetch(url)
  .then((message) => {
    let output = document.getElementById("output");
    output.textContent = message;
    document.body.appendChild(output);
  })
  .catch((error) => {
    if(error.status===404){
        let output = document.getElementById("output");
        output.textContent = "The data you are looking for, does not exist.";
        //document.body.appendChild(output);
    }
  });
