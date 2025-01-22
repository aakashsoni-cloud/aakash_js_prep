const input = ["a", "b", "a", "c", "b", "a"];

const output = { a: 3, b: 2, c: 1 };

function countTheChar(arr) {
  return arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}

console.log(countTheChar(input));
