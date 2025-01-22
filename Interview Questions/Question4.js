// Write a function for the desired output as:

/* js
// Input: sum(2)(3)()
// Output: 5

// Input: sum(2)(3)(4)()
// Output: 9
*/

function sum1(a) {
  return function (b) {
    return function () {
      return a + b;
    };
  };
}

console.log(sum1(2)(3)());

function sum(a) {
  let initialSum = a;
  return function innerSum(b) {
    return function innerInnerSum(c) {
      return function innerInnerInnerSum() {
        let finalSum = b + c;
        initialSum += finalSum;
        return initialSum;
      }
    };
  };
}

console.log(sum(2)(3)(4)());
