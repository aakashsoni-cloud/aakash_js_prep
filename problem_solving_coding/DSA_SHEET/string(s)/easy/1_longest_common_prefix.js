/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

*/

let str = ["flower", "flow", "flight"];

function longestCommonPrefix(str) {
  let n = str.length;

  let prefixChar = str[0];
  let prefixLength = str[0].length - 1;

  for (let i = 1; i < n; i++) {
    let word = str[i];
    while (prefixChar.substring(0, prefixLength) !== word) {
      prefixLength--;

      if (prefixLength == 0) {
        prefixChar = "";
      }
      prefixChar = prefixChar.substring(0, prefixLength);
    }
  }
}

console.log(longestCommonPrefix(str));
