/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

/*
Time Complexity:
1. Sorting the array takes O(n log n).
2. The outer loop runs O(n) times.
3. The inner loop may also run up to O(n) in the worst case, but since each interval is processed once, the total iterations remain O(n).

Overall, the complexity is O(n log n) due to sorting, which dominates the rest of the operations.

Space Complexity:
- If we consider the result array, the worst-case space complexity is O(n) (when no intervals overlap).
- If modifying the input array in place, additional space usage is O(1), apart from the output storage.
*/
function mergeIntervalBrute(arr) {
  let n = arr.length;

  // Step 1: Sort the intervals based on the starting value
  arr.sort((a, b) => a[0] - b[0]);

  let res = []; // Array to store merged intervals

  // Step 2: Iterate through the sorted intervals
  for (let i = 0; i < n; i++) {
    let start = arr[i][0]; // Start of the current interval
    let end = arr[i][1]; // End of the current interval

    // If the current interval is completely covered by the last interval in `res`, skip it
    if (res.length && end <= res[res.length - 1][1]) {
      continue;
    }

    // Step 3: Merge overlapping intervals
    for (let j = i + 1; j < n; j++) {
      // If the next interval starts before the current interval ends, merge them
      if (arr[j][0] <= end) {
        end = Math.max(end, arr[j][1]); // Extend the current interval's end
      } else {
        break; // Stop merging as intervals are no longer overlapping
      }
    }

    // Step 4: Add the merged interval to the result
    res.push([start, end]);
  }

  return res; // Return the merged intervals
}

// TC:  O(n log n) -> O(n log n) sorting + O(n)
function mergeIntervalOptimize(arr) {
  let n = arr.length;

  // Step 1: Sort the intervals based on the starting value
  arr.sort((a, b) => a[0] - b[0]);

  const res = []; // Array to store merged intervals

  // Step 2: Iterate through each interval
  for (let i = 0; i < n; i++) {
    // If the result array is empty or the current interval does not overlap, add it to `res`
    if (!res.length || arr[i][0] > res[res.length - 1][1]) {
      res.push(arr[i]);
    } else {
      // If there is an overlap, merge by updating the end time of the last interval in `res`
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], arr[i][1]);
    }
  }

  return res; // Return the merged intervals
}

console.log(mergeIntervalBrute(intervals));
console.log(mergeIntervalOptimize(intervals));
