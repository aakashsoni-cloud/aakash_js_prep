//Given an array nums sorted in non-decreasing order,
// return the maximum between the number of positive integers and the number of negative integers.

/* This code snippet is implementing a binary search algorithm to find the maximum count of either
 positive or negative integers in a sorted array. Here's a breakdown of what the code is doing: */

let nums = [-2, -1, -1, 1, 2, 3];

function maximumCount(nums) {
  return Math.max(upperBound(nums), lowerBound(nums));
}

function upperBound(nums) {
  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    let middle = Math.ceil((start + end) / 2);
    if (nums[middle] < 0) {
      start = middle;
    } else {
      end = middle - 1;
    }
  }
  return nums[0] >= 0 ? 0 : start + 1;
}

function lowerBound(nums) {
  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] > 0) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
  return nums[nums.length - 1] <= 0 ? 0 : nums.length - start;
}

console.log(maximumCount(nums));
