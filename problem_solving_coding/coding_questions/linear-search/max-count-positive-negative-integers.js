//Given an array nums sorted in non-decreasing order, 
// return the maximum between the number of positive integers and the number of negative integers.


let nums = [-2, -1, -1, 1, 2, 3];
function maximumCount(nums) {
  let pos = 0;
  let neg = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      pos++;
    } else if (nums[i] > 0) {
      neg++;
    }
  }
  max = pos;
  if (pos < neg) {
    max = neg;
  }
  return max;
}

console.log(maximumCount(nums));
