// Find the second largest number from the array list
// If not present then return -1

function findSecondLargest(arr) {
  // Approach One
  // if (arr.length <= 1) {
  //   return -1;
  // }

  // arr.sort((a, b) => b - a);
  // return arr[1];

  // Approach Second

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

  return second === -1 ? -1 : second;
}
const arr = [1, 5, 20, 5, 6];
console.log(findSecondLargest(arr));
