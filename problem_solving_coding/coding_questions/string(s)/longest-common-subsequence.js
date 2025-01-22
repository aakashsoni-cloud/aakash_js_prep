/*


Given two strings text1 and text2, return the length of their longest common subsequence. 
If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original 
string with some characters (can be none) deleted without 
changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".

Input: text1 = "abcde", text2 = "ace" 
Output: 3 

Input: text1 = "abc", text2 = "abc"
Output: 3


Input: text1 = "abc", text2 = "def"
Output: 0

Input: text1 = "bl", text2 = "yby"
Output: 1


*/

let longestCommonSubsequence = function (text1, text2) {
  // base case of shifting by index
  let dp = Array.from(Array(text1.length + 1).fill(0), () =>
    Array(text2.length + 1).fill(0)
  );

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[text1.length][text2.length];
};

let str1 = "abcde";
let str2 = "ace";

console.log(longestCommonSubsequence(str1, str2));
