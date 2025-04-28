/*


nteger array nums of even length consisting of an unequal number of positive and negative integers.


You should return the array of nums such that the the array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.

*/

// let nums = [-5, -2, -3, 4];
let nums = [-4, -1, 3, 2, 5, 6];

function reaarange(nums) {
  let pos = [];
  let neg = [];

  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      neg.push(nums[i]);
    } else {
      pos.push(nums[i]);
    }
  }

  if (pos.length > neg.length) {
    for (let i = 0; i < neg.length; i++) {
      nums[2 * i] = pos[i];
      nums[2 * i + 1] = neg[i];
    }

    let index = neg.length * 2;
    for (let i = neg.length; i < pos.length; i++) {
      nums[index] = pos[i];
      index++;
    }
  } else {
    for (let i = 0; i < pos.length; i++) {
      nums[2 * i] = pos[i];
      nums[2 * i + 1] = neg[i];
    }

    let index = pos.length * 2;
    for (let i = pos.length; i < neg.length; i++) {
      nums[index] = neg[i];
      index++;
    }
  }

  return nums;
}

console.log(reaarange(nums));
