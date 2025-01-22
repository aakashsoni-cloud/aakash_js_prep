//Given two integers x and y, return the Hamming distance between them.

let x = 1,
  y = 4;

function hammingDistance(x, y) {
  x = x.toString(2);
  y = y.toString(2);

  if (x.length < y.length) {
    while (x.length !== y.length) x = "0" + x;
  } else {
    while (x.length !== y.length) y = "0" + y;
  }

  let count = 0;

  for (let i = 0; i < x.length; i++) {
    if (x.charCodeAt(i) !== y.charCodeAt(i)) {
      count++;
    }
  }
  return count;
}

console.log(hammingDistance(x, y));
