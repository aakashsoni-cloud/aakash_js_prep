/*
### Remove Duplicates from Sorted Array ###

    Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]
    Explanation: Your function should return k = 2, 
    with the first two elements of nums being 1 and 2 respectively.
    It does not matter what you leave beyond the returned 
    k (hence they are underscores).


*/

let num = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicate(nums) {
  let l = 1;
  for (let r = 1; r < nums.length; r++) {
    if (nums[r] !== nums[l - 1]) {
      nums[l] = nums[r];
      l++;
    }
  }
  return l;
}

console.log(removeDuplicate(num));

// output = 5
