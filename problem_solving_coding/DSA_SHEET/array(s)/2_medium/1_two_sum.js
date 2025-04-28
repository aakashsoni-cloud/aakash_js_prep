// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

let arr = [2, 7, 11, 15];
let target = 9;

// Brute Force TC : O(N*N) SC: O(N)

function twoSumBrute(arr, target) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSumBrute(arr, target));

// Better Approach - Hashing -> TC: O(N*logN) SC: O(N)

function twoSumHashing(arr, target) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];

    if (diff in map) {
      return [map[diff], i];
    } else {
      map[arr[i]] = i;
    }
  }
}

console.log(twoSumHashing(arr, target));

// Optimized approach - Two Pointer -> TC: O(N) SC: O(1) -> Should be sorted

function twoSumTwoPointer(arr, target) {
  let n = arr.length;
  let i = 0;
  let j = n - 1;

  while (i < j) {
    if (arr[i] + arr[j] == target) {
      return [i, j];
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else {
      j--;
    }
  }
}

console.log(twoSumTwoPointer(arr, target));
