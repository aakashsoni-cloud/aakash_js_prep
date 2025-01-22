/*
Given an array of integers nums sorted in non-decreasing order, 
find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

*/

// Linear Search O(N)

let arr = [5, 7, 7, 8, 8, 10];
let target = 8;

function occurrence(arr, target) {
  let n = arr.length;
  let first = -1;
  let second = -1;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] == target) {
      if (first == -1) {
        first = i;
      } else {
        second = i;
      }
    }
  }

  return [first, second];
}

console.log(occurrence(arr, target));

// Binary Search O(log N)

function firstOccurrence(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  let first = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      first = mid;
      high = mid - 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return first;
}

function lastOccurrence(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  let first = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      first = mid;
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return first;
}

function occurrenceBS(arr, target) {
  let first = firstOccurrence(arr, target);
  if (first === -1) return [-1, -1];
  let last = lastOccurrence(arr, target);
  return [first, last];
}

console.log(occurrenceBS(arr, target));
