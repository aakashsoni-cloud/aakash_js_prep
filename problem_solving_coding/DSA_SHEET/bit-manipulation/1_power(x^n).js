/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

let x = 2.0,
  n = 10;

//x = 2.00000, n = -2
var myPow = function (x, n) {
  // TC: o(N)
  let ans = 1;

  if (x == 1 || n == 0) {
    return 1;
  }
  // If n is negative, so x^(-n)
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  while (n > 0) {
    ans *= x;
    n--;
  }
  return ans;
};

var myPowOptimized = function (x, n) {
  // TC: o(log(N))

  let binaryForm = BigInt(n);
  let ans = 1;

  if (n < 0) {
    x = 1 / x;
    binaryForm = -binaryForm;
  }

  while (binaryForm > 0) {
    // only add to ans if the binary is 1
    if (binaryForm % 2n == 1n) {
      ans *= x;
    }

    // square if the binary number is 0 or 1
    x *= x;
    binaryForm = binaryForm / 2n;
  }

  return ans;
};
