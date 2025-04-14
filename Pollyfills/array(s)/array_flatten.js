// Question
// Very frequently asked question
// Level -> Easy

// Write custom function for Array.flat() using both recursive and iterative
// approaches.

// const flattenRecursive = (arr) => {
// 	 //code here
// };

// const flattenIterative = (arr) => {
// 	// code here
// };

// Follow up
// // Write a function to flatten a nested array up to a given depth
// const flattenRecursiveWithDepth = (arr) => {
// 	// code here
// };

function flattenRecursive(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array");
  }

  let result = [];

  for (const ele of arr) {
    if (Array.isArray(ele)) {
      result.push(...flattenRecursive(ele));
    } else {
      result.push(ele);
    }
  }

  return result;
}

const flattenIterative = (arr) => {};

const flattenRecursiveWithDepth = (arr, depth) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("The first argument must be an array.");
  }

  let result = [];

  if (depth === 0) return arr;

  for (const ele of arr) {
    if (Array.isArray(ele) && depth > 0) {
      result.push(...flattenRecursiveWithDepth(ele, depth - 1));
    } else {
      result.push(ele);
    }
  }

  return result;
};

const resultRecursive = flattenRecursive([
  [[[0]], [1]],
  [[[2], [3]]],
  [[4], [5]],
]); // [0, 1, 2, 3, 4, 5]
console.log(resultRecursive, "Recursive Result");

const resultIterative = flattenIterative([
  [[[0]], [1]],
  [[[2], [3]]],
  [[4], [5]],
]); // [0, 1, 2, 3, 4, 5]
console.log(resultIterative, "Iterative Result");

const result = flattenRecursiveWithDepth(
  [[[[[0]]], [1]], [[[2], [3]]], [[4], [5]]],
  3
);
console.log(result, "Recursive Result with Depth");
