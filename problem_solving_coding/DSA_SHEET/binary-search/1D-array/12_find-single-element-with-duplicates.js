/*
You are given a sorted array consisting of only integers 
where every element appears exactly twice, except 
for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

*/

var singleNonDuplicate = function (nums) {
    let n = nums.length;

    // If there's only one element, return it
    if (n == 1) return nums[0];

    // Check if the first element is the unique one
    if (nums[0] !== nums[1]) return nums[0];

    // Check if the last element is the unique one
    if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];

    let low = 1;
    let high = n - 2;

    // Binary search to find the unique element
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If nums[mid] is unique, return it
        if (nums[mid] !== nums[mid - 1] && nums[mid + 1] !== nums[mid]) {
            return nums[mid];
        }

        // every element to the left of single element is in form of (even odd) means unique element in right half
        // every element to the right of single element is in form of (odd even) means unique element in left half

        // Eliminate the half which matches if standing at left eliminate that same for right

        // If mid is even and nums[mid] == nums[mid + 1]
        // If mid is odd and nums[mid] == nums[mid - 1]
        if ((mid % 2 == 0 && nums[mid] == nums[mid + 1]) || (mid % 2 == 1 && nums[mid] == nums[mid - 1])) {
            low = mid + 1;
        } else {
            // Otherwise, the unique element is in the left half
            high = mid - 1;
        }
    }
};
