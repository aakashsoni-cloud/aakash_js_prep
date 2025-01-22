// Paper Stripe with n blocks having a number including negatives
// Need to cut the strip into two piece so that the sum of numbers from one piece is equals to
// the sum of the number from the another piece
// Find the number of ways to possible to cut the stripe

function paperStipeCutWays(arr) {
  const totalSum = arr.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;
  let totalWays = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    leftSum += arr[i];
    if (2 * leftSum === totalSum) {
      totalWays++;
    }
  }
  return totalWays;
}

const arr = [1, 5, -6, 7, 9, -16, 0, -2, 2];
console.log(paperStipeCutWays(arr));
