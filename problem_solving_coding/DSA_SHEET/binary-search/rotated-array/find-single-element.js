/*

You are given a sorted array consisting of only integers where 
every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

*/

let arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];

// Linear Search TC O(N)

function findSingleElement(arr) {
  let n = arr.length;

  if (n === 1) return arr[0];

  for (let i = 0; i < n; i++) {
    if (i == 0 && arr[0] !== arr[1]) return arr[i];
    else if (i == n - 1 && arr[n - 1] !== arr[n - 2]) return arr[n - 1];
    else {
      if (arr[i - 1] !== arr[i] && arr[i] !== arr[i + 1]) {
        return arr[i];
      }
    }
  }
}

console.log(findSingleElement(arr));

// Binary Search TC O(logN)

function findSingleElementBS(arr) {
  let n = arr.length;
  if (n == 1) return arr[0];

  if (arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // at left eliminate the left on (even, odd), hence item at right
    if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]) {
      return arr[mid];
    }

    if (
      (mid % 2 == 1 && arr[mid] === arr[mid - 1]) ||
      (mid % 2 == 0 && arr[mid] === arr[mid + 1])
    ) {
      low = mid + 1;
    }
    // at right eliminate the right portion (odd, even), hence item at left
    else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(findSingleElementBS(arr));
