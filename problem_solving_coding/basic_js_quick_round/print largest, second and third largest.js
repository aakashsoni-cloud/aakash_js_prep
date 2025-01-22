const data = [3, 1, 33, 0, 5, 12, 77];

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

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  return { first, second };
}

function printThirdLargest(arr) {
  let first = arr[0];
  let second = -1;
  let third = -1;

  for (let num of arr) {
    if (num > first && second > third) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    } else if (num > third && num < second) {
      third = num;
    }
  }

  return { first, second, third };
}

console.log(printLargest(data));
console.log(printSecondLargest(data));
console.log(printThirdLargest(data));
