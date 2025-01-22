// PolyFill for array.forEach

let arr = [1, 2, 3, 4, 5];

Array.prototype.customForEach = function (cb, thisArg) {
  let obj = this;

  let inputArr = Object(obj);
  let inputArrayLength = inputArr.length || 0;

  for (let i = 0; i < inputArrayLength; i++) {
    if (i in inputArr) {
      cb.call(thisArg, inputArr[i], i, inputArr);
    }
  }
};

arr.customForEach((item) => {
  var double = item * 2;
  console.log(double);
});

arr.forEach((item) => {
  var double = item * 2;
  console.log(double);
});
