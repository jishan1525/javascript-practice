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

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/itemlist") {
//         reject({
//           status: 404,
//           message: "Items list not found.",
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//             data: [
//               { itemName: "Bread", price: 30 },
//               { itemName: "Water Bottle", price: 50 },
//               { itemName: "Dairy Milk", price: 20 },
//             ],
//           },
//         });
//       }
//     }, 2000);
//   });
// };
// // Your Code here
// let url = "https://example.com/api/itemlist";
// fakeFetch(url)
//   .then((message) => {
//     let output = document.getElementById("output");
//     output.textContent = message;
//     document.body.appendChild(output);
//   })
//   .catch((error) => {
//     if(error.status===404){
//         let output = document.getElementById("output");
//         output.textContent = "The data you are looking for, does not exist.";
//         //document.body.appendChild(output); append is used when we create a new element using JS and we need to add it to the body of the document
//     }
//   });

//   Use this URL - https://example.com/api/itemlist to make a fake fetch call and list out all the
//   items as an ordered list on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS
//   template in REPL or Vanilla template in CodeSandbox for this question.

//   const fakeFetch = (url) => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     if (url === "https://example.com/api/itemlist") {
//     resolve({
//     status: 200,
//     message: "Success",
//     data: [
//     { itemName: "Bread", price: 30, quantity: 10 },
//     { itemName: "Water Bottle", price: 50, quantity: 50 },
//     { itemName: "Dairy Milk", price: 20, quantity: 30 }
//     ]
//     });
//     } else {
//     reject({
//     status: 404,
//     message: "Items list not found."
//     });
//     }
//     }, 2000);
//     });
//     };

//     //Your code here

//     const output = document.getElementById('output');
//     output.innerHTML="";
//     const data = fakeFetch("https://example.com/api/itemlist");
//     data.then((message)=>{
// message.data.forEach(item => {
//     const itemElement = document.createElement("p");
//             itemElement.textContent = `${item.itemName} -- INR ${item.price} -- ${item.quantity}`;
//             output.appendChild(itemElement);
// });
//     })

// Use this URL - https://example.com/api/data to make a fake fetch call and handle errors if any.
// Show a proper message to the user on the DOM, as per the status and message received from
// the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla
// template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/data") {
//         reject({
//           status: 500,
//           message: "Internal Server Error",
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//           },
//         });
//       }
//     }, 2000);
//   });
// };

// // Your Code here

// const data = fakeFetch("https://example.com/api/data");
// data
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((data) => {
//     const element = document.createElement("p");
//     element.textContent = `${data.message}! The server crashed. Please try again in some time.`;
//     document.body.appendChild(element);
//   });

// Output on the DOM should be:
// Internal Server Error! The server crashed. Please try again in some time.

// Use this URL - https://example.com/api/profile to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received
// from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or
// Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/profile") {
//         reject({
//           status: 401,
//           message: "Unauthorized Access",
//         });
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//           },
//         });
//       }
//     }, 2000);
//   });
// };
// // Your Code here

// const data = fakeFetch("https://example.com/api/profile");
// data
//   .then(() => {
//     console.log("Logged in successful");
//   })
//   .catch((response) => {
//     const element = document.createElement("p");
//     element.textContent = `${response.message}! Looks like you are not logged in. Please login to see your profile`;
//     document.body.appendChild(element);
//   });

// Output on the DOM should be:
// Unauthorized Access! Looks like you are not logged in. Please login to see your profil

// Use this URL - https://example.com/api/profile/NC002 in which we are passing the id of a user
// to make a fake fetch call and display a welcome message to the user on the DOM. A fakeFetch
// has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in
// CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/profile/NC002") {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//             data: { id: "NC002", name: "Roshan", institute: "neoG Camp" },
//           },
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Resource not found",
//         });
//       }
//     }, 2000);
//   });
// };
// // Your Code here

// fakeFetch("https://example.com/api/profile/NC002")
//   .then((response) => {
//     const elementCreated = document.createElement("p");
//     elementCreated.textContent = `Welcome!, ${response.data.data.name} from ${response.data.data.institute}`;
//     document.body.appendChild(elementCreated);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Output on the DOM should be: Welcome!, Roshan from neoG Camp
