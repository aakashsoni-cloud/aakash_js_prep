/*

You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints 
of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Input: height = [1,1]
Output: 1
*/

var containerWithMostWater = function (height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxWater = Math.max(
      maxWater,
      (right - left) * Math.min(height[right], height[left])
    );
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(containerWithMostWater(height));
