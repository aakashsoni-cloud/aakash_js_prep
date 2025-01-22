/*
Given the sorted rotated array nums of unique elements, 
return the minimum element of this array.

*/

let arr = [7, 0, 1, 2, 3, 4, 5, 6];

function findMin(arr) {
  let n = arr.length;

  let low = 0;
  let high = n - 1;

  let min = Number.MAX_VALUE;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[low] <= arr[mid]) {
      min = Math.min(min, arr[low]);
      low = mid + 1; // eliminate the left half
    }

    if (arr[mid] <= arr[high]) {
      min = Math.min(min, arr[mid]);
      high = mid - 1;
    }
  }

  return min;
}

console.log(findMin(arr));
