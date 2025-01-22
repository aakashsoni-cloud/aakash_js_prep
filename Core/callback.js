// ## What is callback function in JS ? ##
// When one function is called and another function
// is passed as an argument to another function that function called callback function

// It will called later in the code
// Example
// function y() {
//   console.log("y called");
// }

// y(function () {
//   console.log("callback called");
// });

// Example 2

// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x called");
//   y();
// }

// x(function y() {
//   console.log("y called");
// });

// ## Blocking main thread ##

// use web apis like setTimeout we can achieve asynchronous programming

// ## Deep about Event Listener ##

document
  .getElementById("clickMe")
  .addEventListener("click", function buttonClick() {
    console.log("clicked");
  });

// Add functionality to increment the count value

// buttonClick forms a closure with incrementCount
function incrementCount() {
  var count = 0;
  document
    .getElementById("clickMe")
    .addEventListener("click", function buttonClick() {
      console.log("count", count++);
    });

    removeEventListener("click", buttonClick);
}

incrementCount();
