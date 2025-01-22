const data = [-6, 8, -3, 2, 14, -17, 8];

function moveItems(arr) {
  let l = 0;
  for (let r = 0; r < arr.length; r++) {
    if (arr[r] < 0) {
      let temp = arr[r];

      // shift all elements from r to l from one position
      for (let k = r; k > l; k--) {
        arr[k] = arr[k - 1];
      }

      console.log(arr)

      arr[l] = temp;

      l++;
    }
  }
  return arr;
}

// ## Approach 2 ##

function moveItemsWithFilters(arr) {
  const negatives = arr.filter((num) => num < 0);
  const positives = arr.filter((num) => num >= 0);
  const res = [...negatives, ...positives];
  return res;
}

console.log(moveItems(data));
