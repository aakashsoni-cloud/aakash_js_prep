/*
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/

function isPalindrome(s, l, r) {
  let count = 0;
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
    count++;
  }
  return count;
}

function palindromicString(s) {
  let ans = 0;
  s = s.split("");
  let n = s.length;

  for (let i = 0; i < n; i++) {
    let even = isPalindrome(s, i, i);
    let odd = isPalindrome(s, i, i + 1);

    ans += even + odd;
  }

  return ans;
}

let s = "abcabc";
console.log(palindromicString(s));
