/*
You are given a 0-indexed integer array nums of even length consisting of an 
equal number of positive and negative integers.

You should return the array of nums such that the the array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

Example 1:

Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. 
The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], 
[-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  

*/

// Brute Force TC: (O(N)) SC: O(N)

function reaarange(num) {
  let pos = [];
  let neg = [];

  let n = num.length;

  for (let i = 0; i < n; i++) {
    if (num[i] > 0) {
      pos.push(num[i]);
    } else {
      neg.push(num[i]);
    }
  }

  for (let i = 0; i < n / 2; i++) {
    num[2 * i] = pos[i];
    num[2 * i + 1] = neg[i];
  }

  return num;
}

let num = [3, 1, -2, -5, 2, -4];
console.log(reaarange(num));


// Optimised TC: O(N) SC:(O(N))
function reaarangeWithoutSpace(num) {
  let n = num.length;

  let posInd = 0;
  let negInd = 1;

  let ans = new Array(n);
  for (let i = 0; i < n; i++) {
    if (num[i] > 0) {
      ans[posInd] = num[i];
      posInd += 2;
    } else {
      ans[negInd] = num[i];
      negInd += 2;
    }
  }

  return ans;
}

console.log(reaarangeWithoutSpace(num));
