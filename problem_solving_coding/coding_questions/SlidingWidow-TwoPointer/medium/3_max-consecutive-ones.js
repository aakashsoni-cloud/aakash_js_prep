// Given a binary array nums, return the maximum number of consecutive 1's in the array

// Brute-force approach

// generate all possible subarrays
// check if each subarray contains all 1's
// return the length of the longest subarray

// Optimized approach

// use single pointer

function maxConsecutiveOnes(arr) {
  let maxLength = 0;
  let sum = 0;

  let r = 0;

  while (r < arr.length) {
    sum += arr[r];

    if (arr[r] === 0) {
      sum = 0;
    }

    maxLength = Math.max(maxLength, sum);
    r++;
  }

  return maxLength;
}

let nums = [1, 1, 0, 1, 1, 1];
console.log(maxConsecutiveOnes(nums));
