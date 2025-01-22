// Given an integer array nums,
// move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.
/*
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

*/
function moveZeros(num) {
  let i = 0;
  for (let j = 0; j < num.length; j++) {
    if (num[j] !== 0) {
      [num[i], num[j]] = [num[j], num[i]];
      i++;
    }
  }
  return num.toString();
}

let num = [0, 1, 0, 3, 12];
console.log(moveZeros(num));
