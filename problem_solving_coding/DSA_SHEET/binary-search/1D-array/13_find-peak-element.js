/*
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index.
 If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, 
an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

*/


var peakIndexInMountainArray = function (arr) {
    let n = arr.length;  // Get the length of the array

    // Edge case: if the length is 1 then return the item
    if(n==1) return arr[0];

    // Edge case: If the first element is the peak
    if (arr[0] > arr[1]) return 0;

    // Edge case: If the last element is the peak
    if (arr[n - 1] > arr[n - 2]) return n - 1;

    let low = 1;          // Initialize low pointer (we ignore first element as peak)
    let high = n - 2;     // Initialize high pointer (we ignore last element as peak)

    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // Find mid index

        // Check if mid is the peak element
        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
            return mid; // Return peak index
        }

        // If mid is part of increasing sequence, move right
        else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
            low = mid + 1;
        } 
        // If mid is part of decreasing sequence, move left
        else {
            high = mid - 1;
        }
    }
};
