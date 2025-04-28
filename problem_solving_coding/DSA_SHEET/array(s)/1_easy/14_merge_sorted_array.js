// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

/*

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1

*/

let num1 = [1, 2, 3];
let num2 = [2, 5, 6];

function mergeSortedArray(num1, num2) {
  let m = num1.length;
  let n = num2.length;

  let i = m - 1;
  let j = n - 1;
  let totalLength = m + n - 1;

  if (n == 0) {
    num1 = num1;
  } else {
    while (j >= 0) {
      if (num1[i] >= num2[j] && i >= 0) {
        num1[totalLength] = num1[i];
        i--;
        totalLength--;
      } else {
        num1[totalLength] = num2[j];
        j--;
        totalLength--;
      }
    }
  }
  return num1;
}

console.log(mergeSortedArray(num1, num2));
