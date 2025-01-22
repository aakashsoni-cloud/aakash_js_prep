// Given a sorted array of distinct integers and a
// target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

let arr = [1, 3, 5, 6];
let target = 5;

function searchInsert(arr, target) {
  let n = arr.length;
  let ans = n;

  let low = 0;
  let high = n-1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

console.log(searchInsert(arr, target));
