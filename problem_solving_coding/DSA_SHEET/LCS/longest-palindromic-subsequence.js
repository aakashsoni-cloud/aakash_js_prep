// Given a string s, find the longest palindromic subsequence's length in s.

// s = "bbbab" output = 4

let s = "bbbab";

function palindromicSubsequence(s) {
  let t = s.split("").reverse().join("");

  let dp = Array.from(Array(s.length + 1).fill(0), () =>
    Array(t.length + 1).fill(0)
  );

  for (let i = 1; i <= s.length; i++) {
    for (j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[s.length][t.length];
}

console.log(palindromicSubsequence(s));
