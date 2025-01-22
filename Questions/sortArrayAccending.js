// Sort an array of number in an ascending order

// function should return a new array with sorted number in ascending order
// Not allowed to use built-in sort function

// Quick sort
function sortAscendingUsingQuick(arr) {
  if (arr.length <= 1) {
    return arr; // Base case
  }

  const pivot = arr[arr.length - 1]; // last element
  const left = [];
  const right = [];

  // Partition the array into left and right arrays
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [
    ...sortAscendingUsingQuick(left),
    pivot,
    ...sortAscendingUsingQuick(right),
  ];
}

console.log(sortAscendingUsingQuick([3, 2, 8, 5, 1, 4, 23]));

// Merge sort

function mergeArray(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] < arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function sortAscendingUsingMerge(arr, low, high) {
  if (low >= high) return; // Base case

  let mid = Math.floor((low + high) / 2);

  sortAscendingUsingMerge(arr, low, mid);
  sortAscendingUsingMerge(arr, mid + 1, high);

  mergeArray(arr, low, mid, high);
}

const arr = [3, 2, 8, 5, 1, 4, 23];
const low = 0;
const high = arr.length - 1;
sortAscendingUsingMerge(arr, low, high);
console.log(arr);
