// Given a binary array nums and an integer goal,
// return the number of non-empty subarrays with a sum goal.

// A subarray is a contiguous part of the array.

/*
Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: There are 4 subarrays with a sum of 2: 
[1,0,1], [1,0,1,0], [0,1,0,1], [1,0,1,0,1].
*/

// Brute force
// make a counter ++ if the sum <= goals
// using two loops

// optimized using two pointers

function binarySubarraySum(nums, goal) {
  return subArray(nums, goal) - subArray(nums, goal - 1);
}

function subArray(nums, goal) {
  let l = 0;
  let r = 0;
  let count = 0;

  let sum = 0;

  while (r < nums.length) {
    sum += nums[r];

    while (l <= r && sum > goal) {
      sum -= nums[l];
      l++;
    }

    count = count + (r - l + 1);
    r++;
  }
  return count;
}

let num = [1, 0, 1, 0, 1];
let goal = 2;
console.log(binarySubarraySum(num, goal));
