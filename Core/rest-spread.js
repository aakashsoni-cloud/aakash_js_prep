// Rest and spread operator used same syntax but they serve different purpose

// rest operator

// used with the functions parameters or object destructuring
// when we want to group remaining elements

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4));

const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // Output: 10
console.log(second); // Output
console.log(rest); // [20, 40, 50]

// spread operator

// used to expand the elements of array/object
// It is used when you need to spread items
// into another array, object, or function call.

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2);

const arr3 = [1, 2];
const arr4 = [3, 4];
const merged = [...arr3, ...arr4];
console.log(merged);
