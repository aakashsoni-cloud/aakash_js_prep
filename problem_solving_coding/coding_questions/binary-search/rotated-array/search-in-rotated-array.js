/*
Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in num
*/

let arr = [4, 5, 6, 7, 0, 1, 2];
let target = 0;

function searchItem(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == target) {
      return mid;
    }
    // left half
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    // right half
    if (arr[mid] <= arr[high]) {
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

console.log(searchItem(arr, target));
