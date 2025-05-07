/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

*/

let nums = [-1, 0, 1, 2, -1, -4];

// Brute Force -> O(N*N)
function threeSumBrute(nums) {
  let n = nums.length;
  let result = new Set();

  for (let i = 0; i < n; i++) {
    let seen = new Set();
    for (let j = i + 1; j < n; j++) {
      let target = -(nums[i] + nums[j]);

      // if target is not present then add the target in seen
      // else if present in seen then push to result array;
      if (!seen.has(target)) {
        seen.add(nums[j]);
      } else {
        let temp = [nums[i], nums[j], target];
        temp.sort((a, b) => a - b);
        result.add(JSON.stringify(temp));
      }
    }
  }
  return [...result].map(JSON.parse);
}

console.log(threeSumBrute(nums));

// Optimized

// O(nLogN) + O(N)
function threeSumOptimized(nums) {
  let n = nums.length;
  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    // if already visited previously
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum == 0) {
        result.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
        while (l < r && nums[l] == nums[l - 1]) l++;
        while (l < r && nums[r] == nums[r + 1]) r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return result;
}

console.log(threeSumOptimized(nums));
