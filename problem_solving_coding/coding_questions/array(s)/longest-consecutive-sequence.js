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
