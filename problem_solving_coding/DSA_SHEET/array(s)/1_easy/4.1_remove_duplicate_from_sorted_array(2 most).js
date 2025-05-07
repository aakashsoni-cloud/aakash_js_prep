var removeDuplicates = function (nums) {
  let n = nums.length;
  let l = 2;
  let r = 2;

  while (r < n) {
    if (nums[r] !== nums[l - 2]) {
      nums[l] = nums[r];
      l++;
    }
    r++;
  }
  return l;
};
