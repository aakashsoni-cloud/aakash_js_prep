// var a = 10;
// {
//   var a = 100;
//   console.log(a);
// }
// console.log(a);

// 100, 10

// const c = 100;
// function x() {
//   const c = 20;
//   console.log(c);
// }

// console.log(c);
// x();

// 100 20

// Ellegal shadowing
// both has separate memory space
// let a = 10;
// {
//   var a = 20;
//   console.log(a);
// }

// console.log(a);

// var a = 100;
// {
//   // Block scope
//   let a = 20;
//   console.log(a); // 20
//   function x() {
//     // local scope
//     let c = 10;
//     var a = 30;
//     console.log(a);
//   }
// }
// console.log(a); // 100
// x();
