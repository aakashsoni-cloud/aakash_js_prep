/*

Given a mountain array mountainArr, 
return the minimum index such that mountainArr.get(index) == target. 
If such an index does not exist, return -1.
*/

let arr = [1, 2, 3, 4, 5, 3, 1];
let target = 3;
// Output: 2 min index

// Linear Search O(N)
function findInMountainArray(arr, target) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

console.log(findInMountainArray(arr, target));

function findPeakElement(arr) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    if (arr[mid] > arr[mid - 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

function findMountain(low, high, arr, target) {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == target) {
      return mid;
    }

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

function findInMountainArrayBS(arr, target) {
  let min = Number.MAX_VALUE;
  let peak = findPeakElement(arr);
  console.log(peak);
  let leftIndex = findMountain(0, peak, arr, target);
  let rightIndex = findMountain(peak + 1, arr.length - 1, arr, target);

  if (leftIndex != -1) {
    min = Math.min(min, leftIndex);
  }

  if (rightIndex != -1) {
    min = Math.min(min, rightIndex);
  }
  return min == Number.MAX_VALUE ? -1 : min;
}

console.log(findInMountainArrayBS(arr, target));
