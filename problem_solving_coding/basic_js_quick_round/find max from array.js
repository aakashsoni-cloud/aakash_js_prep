// Write a function to find the max number from an array

function findMax(arr) {
  return arr.reduce((acc, curr) => {
    if (curr > 0) {
      if (acc < curr) {
        acc = curr;
      }
    } else {
      acc = -1;
      if (acc > curr) {
        acc = curr;
      }
    }

    return acc;
  }, 0);
}

console.log(findMax([1, 9, 2, 5, 11, 50, 23]));
console.log(findMax([5]));
console.log(findMax([-10, -5, -3, -9, -2]));
