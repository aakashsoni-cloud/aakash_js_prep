// Given an array of size n, write a program to check if the given array
// is sorted in (ascending / Increasing / Non-decreasing) order or not.
// If the array is sorted then return True, Else return False.

// Approach 1 -> Two loop traversal TC-O(n^2)
function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) return false;
    }
  }

  return true;
}

const arr = [1, 2, 3, 4, 5];
const ans = isSorted(arr);
console.log(ans);

// Approach 2 -> Single traversal TC-O(n^2)

function isSortedOp(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }

  return true;
}

const arr1 = [1, 2, 3, 5, 3];
const ans1 = isSortedOp(arr1);
console.log(ans1);
