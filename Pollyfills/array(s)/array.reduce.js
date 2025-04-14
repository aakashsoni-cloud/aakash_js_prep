let number = [1, 2, 4, 6, 10];

Array.prototype.customReduce = function (cb, initialValue, thisArgs) {
  let obj = this;

  if (obj === null) throw new Error("'this' is null or not defined");

  let inputArr = Object(obj); // array []
  let inputArrayLength = inputArr.length || 0;

  let acc = 0;

  if (arguments.length > 0) {
    acc = initialValue;
  }

  // to allow explicit control over the this context inside the callback.
  // If thisArgs is not provided, this inside the callback defaults to undefined in strict mode.
  for (let i = 0; i < inputArrayLength; i++) {
    if (i in inputArr) {
      acc = cb.call(thisArgs, acc, inputArr[i], i, inputArr);
    } else {
      acc = inputArr[i];
    }
  }
  return acc;
};

let result = number.customReduce((acc, curr) => {
  if (curr > 1) {
    acc += curr;
  }
  return acc;
}, 0);
console.log(result);
