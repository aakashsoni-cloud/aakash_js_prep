function curry(args) {
  return function (newArgs) {
    if (!newArgs) {
      // undefined
      return args;
    }
    return curry(args + newArgs);
  };
}
let ans = curry(1)(2)(3)(4)();
console.log(ans);

let mult = curriedMultiply(1)(2, 3)(4)(5);

console.log(mult);
