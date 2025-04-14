/*

Given two strings s and t of lengths m and n respectively, 
return the minimum window substring of s such that every character in t (including duplicates) 
is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.


Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
*/

let s = "ADOBECODEBANC";
let t = "ABC";

function minimumWindowSubstring(s, t) {
  let hash = {};

  let n = s.length;
  let m = t.length;
  let l = 0;
  let r = 0;

  let count = 0;
  let minLength = Infinity;
  let sIndex = -1;

  if (n < m) return "";

  for (let i = 0; i < 256; i++) {
    hash[String.fromCharCode(i)] = hash[String.fromCharCode(i)] || 0;
  }

  for (let i = 0; i < m; i++) {
    hash[t[i]] = (hash[t[i]] || 0) + 1;
  }

  while (r <= n) {
    if (hash[s[r]] && hash[s[r]] > 0) {
      count++; // increase the count if already present in hash
    }

    // decrease the if already visited
    hash[s[r]] = (hash[s[r]] || 0) - 1;

    // if count is equal to m
    // that means we have found our substring
    // update the minLength
    // and sIndex -> startIndex
    while (count == m) {
      if (r - l + 1 < minLength) {
        minLength = r - l + 1;
        sIndex = l;
      }

      // update the hash
      hash[s[l]]++;

      // decrease the count
      if (hash[s[l]] > 0) {
        count--;
      }
      l++;
    }
    r++;
  }

  // return the substring
  return minLength == Infinity ? "" : s.substring(sIndex, sIndex + minLength);
}

console.log(minimumWindowSubstring(s, t));
