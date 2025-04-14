/*
Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.


Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

// Brute Force: TC: O(3N) SC: O(3N)

let num = [1, 2, 3, 4];

function productSelf(num) {
  let res = [];
  let prefixPro = [];
  let suffixPro = [];

  let n = num.length;

  prefixPro[0] = 1;
  suffixPro[n - 1] = 1;

  for (let i = 1; i < n; i++) {
    prefixPro[i] = prefixPro[i - 1] * num[i - 1];
  }

  let suffix = 1;
  for (let i = n - 2; i >= 0; i--) {
    suffix *= num[i + 1];
    suffixPro[i] = suffix;
  }

  for (let i = 0; i < n; i++) {
    res[i] = prefixPro[i] * suffixPro[i];
  }

  return res;
}

console.log("Brute", productSelf(num));

function productOfArraySelf(nums) {
  let n = nums.length;
  let result = [];
  result[0] = 1;

  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let suffix = 1;

  for (let i = n - 2; i >= 0; i--) {
    suffix *= nums[i + 1];
    result[i] *= suffix;
  }

  return result;
}

console.log("Optimized", productOfArraySelf(num));
