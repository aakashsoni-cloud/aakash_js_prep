/*

A permutation of an array of integers is an arrangement of 
its members into a sequence or linear order.

The next permutation of an array of integers is the next 
lexicographically greater permutation of its integer.


For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] 
because [3,2,1] does not have a lexicographical larger rearrangement.


*/

/*
// Explanation of Each Step
// Find the pivot (nums[i] < nums[i+1])
 
// Traverse from right to left to find the first decreasing number.
// This number marks the point where the permutation can be increased.
// If no pivot is found, the array is the highest permutation (reverse it to get the lowest one).
// Find the Smallest Larger Element
 
// Find the rightmost number greater than nums[pivot].
// Swap them to get a larger permutation.
// Reverse the Right Part
 
// Reverse everything after the pivot to get the next smallest permutation.

// 🔹 Complexity Analysis
// ✅ Time Complexity: O(n)
 
// One pass to find the pivot (O(n))
// One pass to find the next greater element (O(n))
// One pass to reverse the suffix (O(n))
// Total: O(3n) = O(n)

// ✅ Space Complexity: O(1)
 
// We modify the array in place, so no extra space is used.
// Now, your function is optimized, easy to read, and well-commented! 🚀 Let me know if you need any improvements. 😊

*/

let num = [1, 2, 5, 4, 3];

function nextPermutation(num) {
  let findIndex = -1;
  let n = num.length;

  // Step 1
  for (let i = n - 2; i >= 0; i--) {
    if (num[i] < num[i + 1]) {
      findIndex = i;
      break;
    }
  }


  // last lexicographical larges
  // Step 2 if already sorted in descending order
  if (findIndex == -1) {
    reverse(num, 0, n - 1);
    return num;
  }

  for (let i = n - 1; i > findIndex; i--) {
    if (num[i] > num[findIndex]) {
      [num[i], num[findIndex]] = [num[findIndex], num[i]];
      break;
    }
  }

  // num.splice(
  //   findIndex + 1,
  //   n - findIndex - 1,
  //   ...num.slice(findIndex + 1).reverse()
  // );

  reverse(num, findIndex + 1, n - 1);
  return num;
}


function reverse(arr, start, end) {
  while(start< end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

console.log(nextPermutation(num));
