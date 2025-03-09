// memoize PollyFills

/*
cache = {
    10: 55,
    20: 6765
}

*/
function memoize(fn) {
  const cache = {};
  return function (...args) {
    let context = this;
    let key = JSON.stringify(args);
    if (!cache.hasOwnProperty(key)) {
      cache[key] = fn.apply(context, args);
    }
    return cache[key];
  };
}
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoization = memoize(fibonacci);

const fib10 = memoization(10);
const fib20 = memoization(20);
const fib0 = memoization(10);

console.log("memoize fibo10", fib10);
console.log("memoize fibo20", fib20);
console.log("memoize fib0", fib0);

