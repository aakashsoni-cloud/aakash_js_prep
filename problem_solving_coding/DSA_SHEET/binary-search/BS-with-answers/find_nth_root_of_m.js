// You are given 2 numbers n and m,
// the task is to find n√m (nth root of m). If the root is not integer then returns -1.

// Approach 1 - Linear Search TC: O(N)

function root(i, n) {
  let mul = i;
  while (n > 1) {
    mul *= i;
    n--;
  }
  return mul;
}
function nthRootOfMLS(n, m) {
  for (let i = 1; i <= m; i++) {
    let ans = root(i, n);
    if (ans === m) {
      return ans;
    }
  }
  return -1;
}

let n = 2;
let m = 9;

let res = nthRootOfMLS(n, m);

console.log(res);

 
function nthRootOfMBS(n, m) {
  let low = 1;
  let high = m;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (root(mid) > m) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return high;
}

let res2 = nthRootOfMBS(n, m);

console.log(res2);
