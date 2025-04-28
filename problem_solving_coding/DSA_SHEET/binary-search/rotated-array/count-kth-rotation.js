/*
Given an increasing sorted rotated array arr of distinct integers. 
The array is right-rotated k times. Find the value of k.
Let's suppose we have an array arr = [2, 4, 6, 9],
 so if we rotate it by 2 times so that it will look like this:
After 1st Rotation : [9, 2, 4, 6]
After 2nd Rotation : [6, 9, 2, 4]
*/

let arr = [5, 1, 2, 3, 4];

function kthRotate(arr) {
  let n = arr.length;

  let low = 0;
  let high = n - 1;

  let min = Number.MAX_VALUE;

  let index = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[low] <= arr[mid]) {
      if (arr[low] < min) {
        min = arr[low];
        index = low;
      }
      low = mid + 1;
    }

    if (arr[mid] < arr[high]) {
      if (arr[mid] < min) {
        min = arr[mid];
        index = mid;
      }
      high = mid - 1;
    }
  }

  return index;
}

console.log(kthRotate(arr));
