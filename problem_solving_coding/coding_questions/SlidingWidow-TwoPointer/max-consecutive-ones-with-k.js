// Given a binary array nums and an integer k,
// return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

/*
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/

function MaxConsecutiveOnes(nums, k) {
  let l = 0;
  let r = 0;
  let maxLength = 0;
  let zeros = 0;

  while (r < nums.length) {
    if (nums[r] === 0) {
      zeros++;
    }
    if (zeros > k) {
      if (nums[l] === 0) {
        zeros--;
      }
      l++;
    }
    maxLength = Math.max(maxLength, r - l + 1);
    r++;
  }
  return maxLength;
}

let nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
let k = 3;

console.log(MaxConsecutiveOnes(nums, k));
