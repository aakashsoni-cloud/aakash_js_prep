/*

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, 
and return its index. If the array contains multiple peaks, 
return the index to any of the peaks.

let arr = [1,2,3,4,5,6,8,5,1]; 8 is peak so index is 6
*/

// Linear Search TC O(N)

let arr = [1, 2, 3, 1, 2, 3];
function findPeakElement(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    if (
      (i == 0 || arr[i - 1] < arr[i]) &&
      (i == n - 1 || arr[i] > arr[i + 1])
    ) {
      return i;
    }
  }
}

console.log(findPeakElement(arr));

// Binary Search TC O(logN)

function findPeakElementBS(arr) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    // peak exist at right
    if (arr[mid] > arr[mid - 1]) {
      low = mid + 1;
    } else if (arr[mid] < arr[mid + 1]) {
      high = mid - 1;
    } else {
       high = mid - 1;
    }
  }
}

console.log(findPeakElementBS(arr));
