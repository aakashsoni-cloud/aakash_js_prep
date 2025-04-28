/* Event Loop

// console.log("start");

// setTimeout(function cbT() {
//   console.log("CB timer");
// }, 5000);

// fetch("https://api.netflix.com", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   cors: {
//     mode: "no-cors",
//   }
// }).then(function cbF() {
//   console.log("cbF Netflix");
// });

// Promise.resolve("Promise").then(function cbP() {
//   console.log("CbP Promise");
// });

// console.log("end");

*/

// Trust issues with callbacks

console.log("start");

setTimeout(function CB() {
  console.log("timer");
}, 0);

console.log("end");

// some code for a time 
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("while ended");

