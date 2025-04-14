// Brute TC: O(N^2);
/*
var subarraySum = function (nums, k) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum == k) {
        max++;
      }
    }
  }
  return max;
};
*/

function subarraySum(num, k) {
  let prefixSum = 0;
  let prefixMap = {};
  prefixMap[0] = 1;

  let count = 0;

  for (let i = 0; i < num.length; i++) {
    prefixSum += num[i];

    let remove = prefixSum - k;

    count += prefixMap[remove] || 0;

    prefixMap[prefixSum] = (prefixMap[prefixSum] || 0) + 1;
  }

  return count;
}

let nums = [1, 1, 1],
  k = 2;

console.log(subarraySum(nums, k));
