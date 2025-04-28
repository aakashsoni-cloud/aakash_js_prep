// Given a positive integer n, find the square root of n. If n is not a perfect square, then return the floor value.
// Floor value of any number is the greatest Integer which is less than or equal to that number

// Approach 1

let n = 5;
function sqrtNumber(n) {
  return Math.floor(Math.sqrt(n));
}

console.log(sqrtNumber(n));

// Approach 2 - Better Approach TC: O(N) Linear search

function sqrtNumberLS(n) {
  let ans = -1;
  for (let i = 1; i <= n; i++) {
    if (i * i <= n) {
      ans = i;
    } else {
      break;
    }
  }
  return ans;
}
let m = 5;
let res = sqrtNumberLS(m);
console.log(res);

// Approach 3 -> Optimized Approach TC: O(log N) Binary Search

function sqrtNumberBS(n) {
  let low = 1;
  let high = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid <= n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}
let x = 25;
let res2 = sqrtNumberBS(x);
console.log(res2);
