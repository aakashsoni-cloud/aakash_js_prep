let s = "abcde";

function printPalindromicSubsequence(s) {
  let t = s.split("").reverse().join("");

  let dp = Array.from(Array(s.length + 1).fill(0), () =>
    Array(t.length + 1).fill(0)
  );

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let len = dp[s.length][t.length];
  let index = len - 1;
  let arr = [];
  let i = s.length;
  let j = t.length;

  while (i > 0 && j > 0) {
    if ((s[i - 1] = t[j - 1])) {
      arr[index] = s[i - 1];
      index--;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return arr.join("");
}

console.log(printPalindromicSubsequence(s));
