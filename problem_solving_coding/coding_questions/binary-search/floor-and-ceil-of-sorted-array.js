//You're given a sorted array 'a' of 'n' integers and an integer 'x'.
// Find the floor and ceiling of 'x' in 'a[0..n-1]'.
let arr = [10, 20, 30, 40, 50];
let target = 25;

function floorAndCeil(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let floor = -1;
  let ceil = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= x) {
      floor = arr[mid];
      low = mid + 1;
    } else {
      ceil = arr[mid];
      high = mid - 1;
    }
  }
  return [floor, ceil];
}

console.log(floorAndCeil(arr, target));
