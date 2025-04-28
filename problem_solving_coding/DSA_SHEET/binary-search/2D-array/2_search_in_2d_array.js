function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == target) return true;
    else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}

var searchMatrix = function (arr, target) {
  let n = arr.length;
  let m = arr[0].length;
  for (let i = 0; i < n; i++) {
    if (arr[i][0] <= target && target <= arr[i][m - 1]) {
      return binarySearch(arr[i], target);
    }
  }
  return false;
};

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;

console.log(searchMatrix(matrix, target));

// Optimize

function optimizeSearchMatrix(arr, target) {
  let n = arr.length;
  let m = arr[0].length;
  let low = 0;
  let high = n * m - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = Math.floor(mid / m); // to find row
    let col = mid % m; // to find column

    if (arr[row][col] == target) return true;
    else if (arr[row][col] < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}
