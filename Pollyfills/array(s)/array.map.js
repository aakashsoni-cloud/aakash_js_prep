// Polyfill for array.map

let arr = [1, 2, 3, 4, 5];

Array.prototype.customMap = function (cb, thisArg) {
  if (typeof cb !== "function") {
    throw new TypeError(`${cb} is not a function`);
  }

  let obj = this;

  let inputArr = Object(obj); // Ensuring 'this' is an object in case it's not an array-like structure
  let inputArrayLength = inputArr.length || 0; // Convert length to a valid number (handles edge cases)

  let result = [];

  for (let i = 0; i < inputArrayLength; i++) {
    result.push(cb.call(thisArg, inputArr[i], i, inputArr));
  }
  return result;
};

let result = arr.customMap((item) => {
  return item * 5;
});

console.log(result);

let result1 = arr.map((item) => {
  return item * 5;
});

console.log(result1);
