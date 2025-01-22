let number = [1, 2, 4, 6, 10];

Array.prototype.customFilter = function (cb) {
  let obj = this;

  let inputArr = Object(obj);
  let inputArrLength = inputArr.length ?? 0;

  let result = [];

  for (let i in inputArr) {
    if (cb.call(obj, inputArr[i], i, inputArr)) {
      result.push(inputArr[i]);
    }
  }

  return result;
};

let list2 = number.customFilter((num) => num > 0);
console.log(list2);
