/* Given an unsorted array of integers nums, 
   return the length of the longest consecutive elements sequence.

Input: nums = [100,4,200,1,3,2]
Output: 4


longest consecutive elements sequence is [1, 2, 3, 4]

*/

function consecutiveSequence(nums) {
  if (nums.length === 0) return 0;

  let numSet = new Set(nums);
  let maxLength = 0;

  for (let num in nums) {
    if (numSet.has(num + 1)) continue;

    let currNum = num;
    let counter = 0; 

    while (numSet.has(--currNum)) {
      counter++;
    }

    maxLength = Math.max(maxLength, counter);
  }

  return maxLength;
}

let nums = [100, 4, 200, 1, 3, 2];
console.log(consecutiveSequence(nums));

// Approach 2 -> Better Approach Hashing Search TC: O(N) + O(N) SC : O(N)

function consecutiveSequenceAnotherApproach(nums) {
  let n = nums.length;

  if (n === 0) return 0;

  let set = new Set();
  let longest = 1;

  for (let i = 0; i < n; i++) {
    set.add(nums[i]);
  }

  for (let it of set) {
    if (!set.has(it - 1)) {
      let count = 1;
      let x = it;

      while (set.has(x + 1)) {
        x++;
        count++;
      }

      longest = Math.max(longest, count);
    }
  }

  return longest;
}

console.log(consecutiveSequenceAnotherApproach(nums));

// const n = nums.length;

// if (n === 0) {
//     return 0;
// }

// nums.sort((a, b) => a - b);

// let cnt = 1;
// let maxi = 0;

// for (let i = 1; i < n; i++) {
//     if (nums[i] !== nums[i - 1]) {
//         if (nums[i] === nums[i - 1] + 1) {
//             cnt++;
//         } else {
//             maxi = Math.max(maxi, cnt);
//             cnt = 1;
//         }
//     }
// }

// return Math.max(maxi, cnt);
