// Given two strings text1 and text2,
// return the length of their longest common subsequence.
// If there is no common subsequence, return 0.
// For example, "ace" is a subsequence of "abcde".

let text1 = "abcde",
  text2 = "ace";

function LCS(text1, text2) {
  let dp = Array.from(Array(text1.length + 1).fill(0), () =>
    Array(text2.length + 1).fill(0)
  );

  for (let i = 1; i <= text1.length; i++) {
    for (j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[text1.length][text2.length];
}
console.log(LCS(text1, text2));
