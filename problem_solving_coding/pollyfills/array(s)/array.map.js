// Polyfill for array.map

let arr = [1, 2, 3, 4, 5];

Array.prototype.customMap = function (cb, thisArg) {
  let obj = this;

  let inputArr = Object(obj);
  let inputArrayLength = inputArr.length || 0;

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
