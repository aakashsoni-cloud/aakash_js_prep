// Given two strings s and t, return true if t is an
//anagram of s, and false otherwise.
/*

Input: s = "anagram", t = "nagaram"

Output: true

*/

function isValidAnagram(s, t) {
  if (s.length !== t.length) return false;
  let letters = {};

  for (let i = 0; i < s.length; i++) {
    letters[s[i]] = letters[s[i]] ? letters[s[i]] + 1 : 1;
    letters[t[i]] = letters[t[i]] ? letters[t[i]] - 1 : -1;
  }

  for (let letter in letters) {
    if (letters[letter] !== 0) return false;
  }

  return true;
}

console.log(isValidAnagram("anagram", "nagaram"));
console.log(isValidAnagram("rat", "mat"));
