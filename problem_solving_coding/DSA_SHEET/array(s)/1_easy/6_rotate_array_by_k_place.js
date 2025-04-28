// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// TC: O(2N)
function rotate(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n; // if rotate by 5 then rotate by 5, if rotate by 6 then rotate by 1 to make it rotate by 1 as 6 % 5 = 1

  rotate(arr, 0, n - 1); // O(N)
  rotate(arr, 0, k - 1); // O(K)
  rotate(arr, k, n - 1); // O(N-K)

  // O(N) + O(K) + O(N-K) => O(2N)

  return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

console.log(rotateArray(arr, k));
