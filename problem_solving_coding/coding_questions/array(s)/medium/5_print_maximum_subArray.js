let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function printMaximumSubarray(nums) {
  let n = nums.length;
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  let startIndex = -1;
  let endIndex = -1;
  let res = [];

  for (let i = 0; i < n; i++) {
    if (sum == 0) startIndex = i;

    sum += nums[i];

    if (sum > max) {
      max = sum;
      endIndex = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  for (let i = startIndex; i <= endIndex; i++) {
    res.push(nums[i]);
  }

  return res;
}
console.log(printMaximumSubarray(nums));
