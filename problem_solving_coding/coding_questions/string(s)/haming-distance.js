// Given two string x and y, return hamming distance between them

// input x = "hello" y = "hwllr"

// output = 2

// find different characters

let x = "hello",
  y = "hwllr";

function hammingDistance(x, y) {
  if (x.length !== y.length) return -1;

  let count = 0;

  for (let i = 0; i < x.length; i++) {
    if (x.charCodeAt(i) !== y.charCodeAt(i)) {
      count++;
    }
  }
  return count;
}

console.log(hammingDistance(x, y));
