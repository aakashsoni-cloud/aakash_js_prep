const arr = [-6, 8, -3, -2, 14, -17, 8];

function moveItems(arr) {
  let l = 0;
  for (let r = 0; r < arr.length; r++) {
    if (arr[r] < 0) {
      let temp = arr[r];

      // shift all elements from r to l from one position
      for (let k = r; k > l; k--) {
        arr[k] = arr[k - 1];
      }
      arr[l] = temp;
      l++;
    }
  }
  return arr;
}

console.log(moveItems(arr));
function moveItemWithFilters(arr) {
  let negatives = arr.filter((num) => num < 0);
  let positives = arr.filter((num) => num >= 0);
  return [...negatives, ...positives];
}

console.log(moveItemWithFilters(arr));
