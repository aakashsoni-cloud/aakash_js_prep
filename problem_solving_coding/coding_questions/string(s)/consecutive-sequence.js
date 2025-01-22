/*
The power of the string is the maximum length 
of a non-empty substring that contains only 
one unique character.

Given a string s, return the power of s.


Input: s = "leetcode"
Output: 2


Input: s = "abbcccddddeeeeedcba"
Output: 5

Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 
*/

function consecutiveSubsequence(s) {
  s.split("");

  let maxLength = 0;

  let left = 0;

  for (let right = 1; right < s.length; right++) {
    if (s[right] !== s[left]) left = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

let s = "abbcccddddeeeeedcba";

console.log(consecutiveSubsequence(s));
