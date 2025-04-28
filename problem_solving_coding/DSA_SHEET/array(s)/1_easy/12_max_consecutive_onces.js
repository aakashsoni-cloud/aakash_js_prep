// Given a binary array nums, return the maximum number of consecutive 1's in the array.
/*

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. 
The maximum number of consecutive 1s is 3.

*/

let nums = [1, 1, 0, 1, 1, 1];
function maxiMumOnces(num) {
  let count = 0;
  let max = 0;
  let i = 0;
  let n = num.length;

  while (i < n) {
    count++;
    max = Math.max(max, count);
    if (num[i] == 0) {
      count = 0;
    }
    i++;
  }

  return max;
}
console.log(maxiMumOnces(nums));
