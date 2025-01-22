// function x() {
//   let a = 10;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// function a() {
//   var x = 10
//   function b() {
//     console.log(x);
//   };
//   return b;
// }

// var y = a(); // copy of b
// y()

// console.log(y)

// y();

///// Tricky questions ///

/// Print 1,2,3,4,5 after each second

// function close(x) {
//   setTimeout(function () {
//     console.log(x);
//   }, 1000);
// }

// function a() {
//   for (var i = 0; i <= 5; i++) {
//     // with var it will run 6 6 times as at last i become 6
//     // with let 0 to 5

//     // with var
//     // close(i)
//     setTimeout(function (y) {
//       console.log(y);
//     }, 1000, i);

//     // with let
//     // setTimeout(function () {
//     //   console.log(i);
//     // }, 1000);

//     // each time it
//     // create a closure with variable x
//   }
// }

// a();

//// Encapsulation ///

// function counter() {
//   var count = 0;
//   return function increment() {
//     count++;
//     console.log(count);
//   };
// }

// var counter1 = counter();
// counter1();
// counter1();

// new counter and new ref to counter
// var counter2 = counter();
// counter2();
// counter2();

//// Scalable code ////
//// constructor function ////

// function Counter() {
//   var count = 0;
//   this.increment = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrement = function () {
//     count--;
//     console.log(count);
//   };
//   this.delete = function () {
//     count = 0;
//     console.log(count);
//   };
// }

// var counter1 = new Counter();
// counter1.increment();
// counter1.increment();
// counter1.decrement();
// counter1.delete();

function x() {
  var b = function b() {
    console.log(b);
  };
  console.log(b);
}

x();
