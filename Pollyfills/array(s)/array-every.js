let arr = [1, 2, 3, 4, 5];

Array.prototype.customEvery = function (cb, thisArgs) {
  let obj = this;

  let inputArr = Object(obj);
  let inputArrLength = inputArr.length || 0;

  for (let i = 0; i < inputArrLength; i++) {
    if (!cb.call(thisArgs, inputArr[i], i, inputArr)) {
      return false;
    }
  }
  return true;
};

let every = arr.customEvery((item) => item > 1);
console.log(every);
