// Use this URL - https://example.com/post/comments to make a fake fetch call and list out all the
// emails of users on the DOM in ordered list. A fakeFetch has been provided. Use HTML, CSS &
// JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/post/comments") {
//         resolve({
//           status: 200,
//           message: "Success",
//           data: [
//             { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
//             {
//               email: "hello@outlook.com",
//               commentBody: "Good going a lot to learn from you awesome",
//             },
//             {
//               email: "ram99@gmail.com",
//               commentBody: "Anyone from Vadodara here",
//             },
//           ],
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No Commentes found.",
//         });
//       }
//     }, 2000);
//   });
// };
// // your code here

// const output = fakeFetch("https://example.com/post/comments");
// output.then((response) => {
//   let i = 1;
//   response.data.forEach((element) => {
//     const elementrendering = document.createElement("p");
//     elementrendering.textContent = `${i}. ${element.email}`;
//     document.body.appendChild(elementrendering);
//     i++;
//   });
// });

// Output on the DOM should be:
// 1. xyz@gmail.com
// 2. hello@outlook.com
// 3. ram99@gmail.com

// Use this URL - https://example.com/winner-team to make a fake fetch call to the get names of
// winner group members and show a nice message on the DOM congratulating all of them. Use
// HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/winner-team") {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//             data: ["Jhon", "Raju", "Anjali", "Sakshi"],
//           },
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "No Users found.",
//         });
//       }
//     }, 2000);
//   });
// };
// // your code here

// const output = fakeFetch("https://example.com/winner-team").then((response) => {
//   let baseString = "Congratulation to the members of winning team ";
//   response.data.data.forEach((element) => {
//     baseString = baseString + element + ", ";
//   });
//   baseString = baseString + "great work";
//   const elementrendering = document.createElement("p");
//   elementrendering.textContent = baseString;
//   document.body.appendChild(elementrendering);
// });

// Output on the DOM should be:
// Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work

// Use this URL - https://example.com/login to make a fake fetch call and show the status like it is
// authenticated or not with a message in the DOM. Use HTML, CSS & JS template in REPL or
// Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/login") {
        resolve({
          status: 200,
          data: {
            auth: true,
          },
        });
      } else {
        reject({
          status: 404,
          message: "Status not found",
        });
      }
    }, 2000);
  });
};

const output = fakeFetch("https://example.com/login");
output
  .then((response) => {
    if (response.data.auth) {
      const elementrendering = document.createElement("p");
      elementrendering.textContent = "Verified";
      document.body.appendChild(elementrendering);
    } 
    else 
    {
      const elementrendering = document.createElement("p");
      elementrendering.textContent = "Not Verified";
      document.body.appendChild(elementrendering);
    }
  })
  .catch(() => {
    const elementrendering = document.createElement("p");
    elementrendering.textContent = "Unauthorized";
    document.body.appendChild(elementrendering);
  });
// your code here
// Output on the DOM should be:
// Verified
