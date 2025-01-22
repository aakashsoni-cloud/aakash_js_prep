// Maximum subarray sum
/*
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

*/

let num = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// Brute force TC O(n^2)

function maxSubarraySum(num) {
  let max = num[0];
  let sum;

  for (let i = 0; i < num.length; i++) {
    sum = 0;
    for (let j = i; j < num.length; j++) {
      sum += num[j];
      max = Math.max(max, sum);
    }
  }
  return max;
}

console.log(maxSubarraySum(num));

// Optimized (Kadane's Algo)

// loop till last if sum < 0 make sum = 0;

function KadaneAlgo(num) {
  let sum = 0;
  let max = Number.MIN_VALUE;

  for (let i = 0; i < num.length; i++) {
    sum += num[i];
    if (sum < 0) {
      sum = 0;
    }
    max = Math.max(max, sum);
  }
  return max;
}

console.log(KadaneAlgo(num));
