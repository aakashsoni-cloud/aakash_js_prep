// Given an integer array nums,
// move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function moveZeros(arr) {
  let l = 0;
  let r = 0;

  while (r < arr.length) {
    if (arr[r] !== 0) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r++;
    } else {
      r++;
    }
  }
  return arr;
}

let num = [0, 1, 0, 3, 12];
console.log(moveZeros(num));
