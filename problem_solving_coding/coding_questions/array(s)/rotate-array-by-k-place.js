let arr = [1, 2, 3, 4, 5, 6, 7];
// arr = [5,6,7,1,2,3,4];
let r = 3;

function rotate(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}
function rotateArray(arr, n) {
  let length = arr.length;
  n = n % length; // should not greater then the length of the array

  rotate(arr, 0, length - 1); // 0 -> last - 1
  rotate(arr, 0, n - 1); // 0 -> mid - 1
  rotate(arr, n, length - 1); // mid -> last - 1

  return arr;
}

console.log(rotateArray(arr, r));
