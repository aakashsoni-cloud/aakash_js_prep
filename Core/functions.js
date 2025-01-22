a();
// Function statement aka function declaration
function a() {
  console.log("a called");
}

// Function expression
var b = function () {
  console.log("b called");
};
b();

// Anonymous function
// Can use with a value it can assign to the variable and then called
// function () {
//     console.log("c called");
// }

// Named function expression
var d = function xy1() {
  console.log(xy1);
  console.log("d called");
};
d();
// xy1(); // ReferenceError: xyz is not defined at line: 27
// As xy1 is not created in outer scope it has the reference in the inner scope only

// Parameters and arguments
var e = function (param1, param2) {
  console.log(param1 + param2);
};
e(2, 3);

// First Class Functions - Ability to be used like values
// First Class Functions - First Class Citizen

// Function passed as value

var i = function (func) {
  console.log(func);
  func(); // function as value called
};
i(function () {
  console.log("function as value called");
});

// Function as argument
var g = function (param) {
  console.log("function as argument called", param);
};

function xyz() {}
g(xyz);

// Function as return value
var f = function () {
  return function () {
    console.log("function as return value called");
  };
};
console.log(f());

// Arrow Functions
var j = (param) => console.log(param);
j(5);
