/*
Given a sorted array, arr[] and a number target, 
you need to find the number of occurrences of target in arr[]. 

Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 2
Output: 4
*/

// Linear Search TC O(N)

let arr = [1, 1, 2, 2, 2, 2, 3],
  target = 2;

function countOccurrence(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == target) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrence(arr, target));

// Binary Search TC O(logN)

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

function countOccurrenceBS(arr, target) {
  let first = firstOccurrence(arr, target);
  let last = lastOccurrence(arr, target);

  return last - first + 1;
}

console.log(countOccurrenceBS(arr, target));
