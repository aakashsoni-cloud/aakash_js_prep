/*
sort 0,1,2


*/

let arr = [1, 0, 0, 1, 2, 2, 1, 0];

// Brute -> Sorting

// Better

function sortZeroOneTwoBetter(arr) {
  let n = arr.length;

  let countZero = 0;
  let countOne = 0;
  let countTwo = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
      countZero++;
    } else if (arr[i] == 1) {
      countOne++;
    } else {
      countTwo++;
    }
  }

  let result = [];

  for (let i = 0; i < countZero; i++) {
    result.push(0);
  }

  for (let i = countZero; i < countZero + countOne; i++) {
    result.push(1);
  }

  for (let i = countZero + countOne; i < countZero + countOne + countTwo; i++) {
    result.push(2);
  }

  return result;
}

console.log("Better", sortZeroOneTwoBetter(arr));

// Optimize O(N)
function dutchNationFlag(arr) {
  let n = arr.length;

  let low = 0;
  let mid = 0;
  let high = n - 1;

  for (let i = 0; i < n; i++) {
    if (arr[mid] == 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}

console.log("Dutch nation flag ALog", dutchNationFlag(arr));
