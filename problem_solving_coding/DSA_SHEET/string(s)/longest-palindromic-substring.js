/*
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

*/

let s = "babad";

function isPalindrom(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.slice(l + 1, r);
}

function longestPalindromicSubsequence(s) {
  let longest = "";
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    let str1 = isPalindrom(s, i, i);
    let str2 = isPalindrome(s, i, i + 1);

    let longestPalindrom = str1.length > str2.length ? str1 : str2;

    if (longestPalindrom.length > longest.length) {
      longest = longestPalindrom;
    }
  }

  return longest;
}

console.log(longestPalindromicSubsequence(s));
