// Search in a row and column wise sorted matrix
/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. 
This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
*/

var searchMatrix = function (matrix, target) {
  // Brute -> O(N^2)

  // Optimise ->

  let n = matrix.length;
  let m = matrix[0].length;

  // start from top right 0,m-1
  // start from bottom left n-1,0

  let row = 0;
  let col = m - 1;

  while (row < n && col >= 0) {
    if (matrix[row][col] == target) {
      return true;
    }

    if (matrix[row][col] < target) {
      row = row + 1;
    } else {
      col = col - 1;
    }
  }

  return false;
};
