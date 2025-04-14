// sort

let arr = [2, 1, 6, 10, 4, 1, 3, 9, 7];

Array.prototype.customSort = function (callback) {
  let obj = this;

  let inputArr = Object(obj); // array []
  let inputArrayLength = inputArr.length || 0;

  for (let i = 0; i < inputArrayLength; i++) {
    for (let j = i + 1; j < inputArrayLength; j++) {
      if (callback(inputArr[i], inputArr[j]) > 0) {
        let temp = inputArr[i];
        inputArr[i] = inputArr[j];
        inputArr[j] = temp;
      }
    }
  }
  return inputArr;
};

arr.customSort((a, b) => a - b);

console.log(arr);

function sortArray(arr) {
  function quickSort(l, h) {
    if (l >= h) return; // Base case

    const index = partition(l, h);
    quickSort(l, index - 1);
    quickSort(index, h);
  }

  function partition(low, high) {
    let pivot = arr[Math.floor((low + high) / 2)];

    while (low <= high) {
      while (arr[low] < pivot) low++;
      while (arr[high] > pivot) high--;

      if (low <= high) {
        [arr[low], arr[high]] = [arr[high], arr[low]];
        low++;
        high--;
      }
    }

    return low;
  }

  quickSort(0, arr.length - 1);
  return arr;
}

console.log(sortArray(arr));
