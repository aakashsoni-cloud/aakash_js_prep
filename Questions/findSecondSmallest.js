function findSecondSmallest(arr) {
  let smallest = arr[0];
  let sSmallest = Number.MAX_SAFE_INTEGER;

  for (let num of arr) {
    if (num < smallest) {
      sSmallest = smallest;
      smallest = num;
    } else if (num !== smallest && num < sSmallest) {
      sSmallest = num;
    }
  }
  return [smallest, sSmallest];
}
const arr = [1, 5, 20, -5, 6];
console.log(findSecondSmallest(arr));
