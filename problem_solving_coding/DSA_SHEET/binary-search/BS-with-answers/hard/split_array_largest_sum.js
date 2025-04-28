/**
 * ✅ Problem statement:
 * Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.
 * Return the minimized largest sum of the split.
 * A subarray is a contiguous part of the array.


 *
 * ✅ Example:
 * nums = [7,2,5,10,8], k = 2
 * Output: 18(as explained in the question).
 *
 * ✅ Time complexity:
 * The expected time complexity is O(n * log(s)),
 * where n = number of books, and s = sum of all pages (search space).
 *
 * ✅ Constraints:
 * 1 <= nums.length <= 1000
 * 0 <= nums[i] <= 106
 * 1 <= k <= min(50, nums.length)
 * The sum of all arr[i] does not exceed 10^9.
 */
function countSplits(arr, pages) {
    let split = 1; // Start with the first student
    let totalSplit = 0; // Track the current sum of pages assigned to the student

    for (let i = 0; i < arr.length; i++) {
        // If adding the current book does not exceed the allowed limit
        if (totalSplit + arr[i] <= pages) {
            totalSplit += arr[i]; // Assign the book to the current student
        } else {
            // Allocate the book to a new student
            split++;
            totalSplit = arr[i]; // Reset totalSplit to the current book's pages
        }
    }
    return split; // Return the number of students required
}

function findSplitArray(arr, n, m) {
    // If the number of students is greater than books, allocation is not possible
    if (m > n) return -1;

    // Lower bound: The largest book (a student must read at least this much)
    let low = Math.max(...arr);
    // Upper bound: The sum of all book pages (if one student reads all books)
    let high = arr.reduce((acc, curr) => acc + curr, 0);

    // Perform binary search to find the optimal maximum pages a student can read
    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // Mid represents the max pages limit

        // Check how many students are required if each student reads at most `mid` pages
        let split = countSplits(arr, mid);

        // If more students are needed than available, increase the lower bound
        if (split > m) {
            low = mid + 1;
        } else {
            // If students required are within limit, try to minimize further
            high = mid - 1;
        }
    }

    // The minimized maximum pages a student has to read
    return low;
}

console.log(findSplitArray([12, 34, 67, 90], 4, 2));

