// Quick Sort -> take pivot and sort

// Time Complexity

// Average time : O(nlogn)
// Best time : O(nlogn)
// Wrost Case : O(n^2)

let arr = [2, 1, 6, 10, 4, 1, 3, 9, 7];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case
  }

  const pivot = arr[0]; // last element
  const left = [];
  const right = [];

  // Partition the array into left and right arrays
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));

// Approach 2

function pivot(arr, start, end) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
}

function QuickSort(arr, start, end) {
  if (start < end) {
    const pivotIndex = pivot(arr, start, end);
    QuickSort(arr, start, pivotIndex - 1);
    QuickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}

console.log(QuickSort(arr, 0, arr.length));
