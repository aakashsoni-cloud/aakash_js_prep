/*

Given an array nums of n integers, return an array of all the unique quadruplets 
[nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.
 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

*/

Number.Min_


var fourSum = function (nums, target) {
  // TC: O(N^3)

  // Length of given array
  let n = nums.length;
  // Auxilary Space for storing
  let res = [];
  // Sort before finding
  nums.sort((a, b) => a - b);

  // Two Fixed pointerss
  for (let i = 0; i < n; i++) {

    // Skip if the value is duplicate on adjacent
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    for (let j = i + 1; j < n; j++) {

      // Skip if the value is duplicate on adjacent
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;

      // Two Moving pointers
      let l = j + 1;
      let r = n - 1;

      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r];

        if (sum == target) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          l++;
          r--;
          // Skipping the same digits
          while (l > 0 && nums[l] == nums[l - 1]) l++;
          while (r > 0 && nums[r] == nums[r + 1]) r--;

        } else if (sum > target) {
          // move left if sum more than target
          r--;

        } else {
          // move rigth if sum less than target
          l++;

        }
      }
    }
  }
  return res;
};
