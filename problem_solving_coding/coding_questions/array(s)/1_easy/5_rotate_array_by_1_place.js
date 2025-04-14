// // Given an integer array nums, rotate the array to the right by 1 steps, where k is non-negative.

// TC : O(N)
// SC: O(1)
function rotate(arr) {
  let n = arr.length;
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = temp;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(arr));
