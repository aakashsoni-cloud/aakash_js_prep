/*
Given the array nums after the rotation and an integer target,
 return true if target is in nums, or false if it is not in nums.
*/

let arr = [7, 8, 1, 2, 3, 3, 3, 4, 4, 6];
let target = 3;

function searchItem(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == target) return true;


    // trim down array
    if (arr[low] == arr[mid] && arr[mid] == arr[high]) {
      low = low + 1;
      high = high - 1;
      continue;
    }

    // left
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    // right
    if (arr[mid] <= arr[high]) {
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
}

console.log(searchItem(arr, target));
