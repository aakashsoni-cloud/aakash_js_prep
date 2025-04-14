/*

Given an integer array nums, find a subarray that has the largest product, and return the product.

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

*/
let nums = [2, 3, -3, 2];

// TC: O(N^2)
function maxProduct(nums) {
  let n = nums.length;
  let currPro = 1;
  let maxPro = -1;

  if (n == 1) return nums[0];

  for (let i = 0; i < n; i++) {
    currPro = 1;
    for (let j = i; j < n; j++) {
      currPro *= nums[j];
      maxPro = Math.max(maxPro, currPro);
    }
  }
  return maxPro;
}

// TC: O(N)
function maxProductOptimise(nums) {
  let n = nums.length;
  let maxProduct = -Infinity; // Store the maximum product found so far
  let prefixProduct = 1; // Product from the start
  let suffixProduct = 1; // Product from the end

  // Edge case: If there's only one element, return it
  if (n === 1) return nums[0];

  // Loop through the array from both ends
  for (let i = 0; i < n; i++) {
    // Reset prefixProduct or suffixProduct if they become 0
    if (prefixProduct === 0) prefixProduct = 1;
    if (suffixProduct === 0) suffixProduct = 1;

    // Multiply prefixProduct by the current element from the front
    prefixProduct *= nums[i];
    // Multiply suffixProduct by the current element from the end
    suffixProduct *= nums[n - i - 1];

    // Update maxProduct by comparing with current prefix and suffix products
    maxProduct = Math.max(maxProduct, prefixProduct, suffixProduct);
  }

  return maxProduct;
}
