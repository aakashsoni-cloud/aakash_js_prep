let printLongestCommonSubsequence = function (text1, text2) {
  // base case of shifting by index
  let dp = Array.from(Array(text1.length + 1).fill(0), () =>
    Array(text2.length + 1).fill(0)
  );
  let arrText = "";
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  console.log(dp);
  let n = text1.length;
  let m = text2.length;
  let len = dp[n][m];
  let index = len - 1;
  let i = n;
  let j = m;
  let arr = [];

  while (i > 0 && j > 0) {
    if (text1[i - 1] === text2[j - 1]) {
      arr[index] = text1[i - 1];
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
};

let str1 = "abcde";
let str2 = "ace";

console.log(printLongestCommonSubsequence(str1, str2));
