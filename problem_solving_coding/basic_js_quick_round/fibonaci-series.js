// var fib = function (n) {
//   let arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }

//   return arr[n];
// };

// Optimised (Recursion)

var fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
// (3) => fib(2) + fib(1);
// fib(2) => fib(1) + fib(0) => 0 + 1 = 1
// fib(1) => fib(0) + fib(-1) => 0 + 1 = 1
// 1 + 1 = 2

fib(3);
