// DRY => Don't Repeat Yourself

const radius = [2, 4, 6, 8];
// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]); 3.14 * r^2
//   }
//   return output;
// };

// const calculateDiameter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };

// console.log(calculateArea(radius))

const area = function (radius) {
  return Math.PI * radius * radius;
}; // pure functions

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  // logic as callback function
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumference));

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

Array.prototype.customMap = function (cb, thisArgs) {
  let obj = this;

  let inputArr = Object(obj);
  let inputArrayLength = inputArr.length ?? 0;
  let output = [];

  for (let i = 0; i < inputArrayLength; i++) {
    output.push(cb.call(thisArgs, inputArr[i], i, inputArr));
  }
  return output;
};

console.log(radius.customMap((item) => item * 2));
console.log(radius.calculate(diameter));
console.log(radius.calculate(circumference));
