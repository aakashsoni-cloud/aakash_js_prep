// Method 1 using Bind

let multiple = function (x, y) {
  console.log(x * y);
};

let multipleByTwo = multiple.bind(this, 2);

multipleByTwo(5);
multipleByTwo(5, 3);

// Method 2 using closure

let multipleMore = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

// Both ways
let multiplyMoreByTwo = multipleMore(1);
multiplyMoreByTwo(2);

multipleMore(2)(3);

// Question
let sum = function (a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
};
console.log(sum(1)(2)(3)(4)());
