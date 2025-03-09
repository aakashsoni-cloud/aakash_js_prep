const data = [3, 1, 33, 33, 5, 12, 77];

function printLargest(arr) {
  let largest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

function printSecondLargest(arr) {
  let first = arr[0];
  let second = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }
  return { first, second };
}

function printThirdLargest(arr) {
  let first = arr[0];
  let second = -1;
  let third = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    } else if (arr[i] > third && arr[i] < second) {
      third = arr[i];
    }
  }

  return { first, second, third };
}

console.log(printLargest(data));
console.log(printSecondLargest(data));
console.log(printThirdLargest(data));
