/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

*/

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//[[7,4,1],[8,5,2],[9,6,3]]
var rotate = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let arr = Array.from(Array(n).fill(0), () => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      arr[j][n - 1 - i] = matrix[i][j];
    }
  }

  return arr;
};

// optimized one

var rotateOptimized = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < m; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(m / 2); j++) {
      [matrix[i][j], matrix[i][m - 1 - j]] = [
        matrix[i][m - 1 - j],
        matrix[i][j],
      ];
    }
  }

  return arr;
};

console.log(rotate(matrix));
