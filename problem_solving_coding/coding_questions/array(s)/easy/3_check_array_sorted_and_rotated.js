// if the array was originally sorted in non-decreasing order,
// then rotated some number of positions (including zero).
/*

Example 1:

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].

*/

// Approach 1 -> Two loop traversal TC: O(N^2)

function checkArray(arr) {
  let k = 0,
    n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] > arr[(j + 1) % n]) {
        k++;
      }
    }
    if (k > 2) {
      return false;
    }
  }

  return true;
}

let nums = [3, 4, 5, 1, 2];
console.log(checkArray(nums));

// Approach 1 -> Two loop traversal TC: O(N^2)

function checkArrayOP(arr) {
  let k = 0,
    n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[(i + 1) % n]) {
      k++;
    }
    console.log(k);

    if (k > 1) {
      return false;
    }
  }

  return true;
}

console.log(checkArrayOP(nums));
