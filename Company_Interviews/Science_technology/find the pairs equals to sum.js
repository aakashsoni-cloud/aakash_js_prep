// Find pairs in an array whose sum is n.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15];

let sum = 17;

// Brute Force
function returnPairs(arr, sum) {
  let pairs = [];
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] + arr[end] < sum) {
      start++;
    } else if (arr[start] + arr[end] === sum) {
      pairs.push([arr[start], arr[end]]);
      start++;
      end--;
    } else if (arr[start] + arr[end] > sum) {
      end--;
    }
  }
  return pairs;
}

// Optimized
function returnPairs(arr, sum) {
  let pairs = new Set(arr);

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (pairs.has(sum - arr[start])) {
      console.log(arr[start], sum - arr[start]);
    }
    start++;
  }
}

// Optimized 2

function returnPairs(arr, sum) {
  let pairs = {};

  let allPairs = [];

  for (let i = 0; i < arr.length; i++) {
    let diff = sum - arr[i];

    if (diff in pairs) {
      allPairs.push([diff, arr[i]]); // console.log(arr[i], diff);
    }

    pairs[arr[i]] = i;
  }

  return allPairs;
}

function returnPairs(arr, sum) {
  let pairs = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = sum - arr[i];
    if (pairs.hasOwnProperty(diff)) {
      console.log(diff, arr[i]);
    }

    pairs[arr[i]] = diff;
  }

  console.log(pairs)
}

console.log(returnPairs(arr, sum));
