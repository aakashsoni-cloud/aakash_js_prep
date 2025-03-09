// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

/*

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]

Output: 8

Explanation:

n = 9 since there are 9 numbers, so all numbers are in the range [0,9].
 8 is the missing number in the range since it does not appear in nums.

*/

// Approach 1 -> Brute Force Linear Search TC: O(N*N)

let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function findMissingNumber(nums) {
  let n = nums.length;

  for (let i = 0; i <= n; i++) {
    let flag = 0;
    for (let j = 0; j <= n - 1; j++) {
      if (nums[j] == i) {
        break;
      }
    }

    if (flag == 0) {
      return i;
    }
  }
}

console.log(findMissingNumber(nums));

// Approach 2 -> Better Approach Hashing Search TC: O(N) + O(N) SC : O(N)

function findMissingNumberHashing(arr) {
  let n = nums.length;
  let hash = Array.from(Array(n + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    hash[arr[i]] = 1;
  }

  for (let i = 0; i <= n; i++) {
    if (hash[i] == 0) {
      return i;
    }
  }
}

console.log(findMissingNumberHashing(nums));

// Approach 3 -> Optimized Approach Submition TC: O(N) SC : O(1)

function findMissingNumberSub(arr) {
  let n = arr.length;
  let sum = (n * (n + 1)) / 2;
  let s2 = 0;
  for (let i = 0; i < n; i++) {
    s2 += arr[i];
  }

  return sum - s2;
}

console.log(findMissingNumberSub(nums));

// Approach 4 -> Optimized Approach XOR TC: O(1) SC : O(1)
function findMissingNumberXOR(arr) {
  let n = arr.length;
  let xor1 = 0,
    xor2 = 0;

  for (let i = 0; i <= n - 1; i++) {
    xor2 = xor2 ^ arr[i]; // 1^2^4^5
    xor1 = xor1 ^ (i + 1); // 1^2^3^4^5
  }

  return xor1 ^ xor2; // (1^1)^(2^2)^(3^3)^(4^4)^(5^5)
}

console.log(findMissingNumberXOR(nums));
