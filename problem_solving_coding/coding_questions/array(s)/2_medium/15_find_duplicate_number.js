/*
Given an array of integers nums containing n + 1 
integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2

*/

let nums = [2, 5, 9, 6, 9, 3, 8, 9, 7, 1];

function findDuplicate(nums) {
  let n = nums.length;
  let fast = nums[0];
  let slow = nums[0];

  // finding the duplicate
  do {
    fast = nums[nums[fast]];
    slow = nums[slow];
  } while (fast !== slow);

  // Confirming the duplicate number
  fast = nums[0];

  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return fast;
}

console.log(findDuplicate(nums));
