/*
You are given an array 'arr' sorted
in non-decreasing order and a number 'x'. 
You must return the index of the lower bound of 'x'

 'lower_bound' of a number 'x' is defined as the 
 smallest index 'idx' such that the value 
 'arr[idx]' is not lesser than 'x'.
 arr[idx] > x

*/

let arr = [1, 2, 3, 3, 7, 8, 9, 9, 9, 11];
let x = 9;

function upperBound(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

console.log(upperBound(arr, x));
