/*
Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
You may return the answer in any order.


Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

*/

// Using Array Hashing TC: O(N) SC: O(N+M)

let s = "cbaebabacd",
  p = "abc";

function findAnagramsArray(s, p) {
  let n = s.length;
  let m = p.length;
  let seen = Array.from(Array(26).fill(0));
  let letters = Array.from(Array(26).fill(0));

  for (let i = 0; i < m; i++) {
    seen[p.charCodeAt(i) - 97]++;
  }

  let l = 0; // left pointer
  let r = 0; // right pointer
  let res = [];

  while (r < n) {
    letters[s.charCodeAt(r) - 97]++;
    if (r - l + 1 > m) {
      letters[s.charCodeAt(l) - 97]--;
      l++;
    }
    if (r - l + 1 == m) {
      if (JSON.stringify(letters) === JSON.stringify(seen)) {
        res.push(l);
      }
    }
    r++;
  }
  return res;
}

// Using Map Hashing TC: O(N) SC: O(N+M)
var isSameMap = function (a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  for (let key in a) {
    if (a[key] !== b[key]) return false;
  }
  return true;
};
var findAnagrams = function (s, p) {
  let n = s.length;
  let m = p.length;
  let seen = {};
  let letters = {};

  for (let i = 0; i < m; i++) {
    seen[p[i]] = (seen[p[i]] || 0) + 1;
  }

  let l = 0;
  let r = 0;
  let res = [];

  while (r < n) {
    let rightChar = s[r];
    letters[rightChar] = (letters[rightChar] || 0) + 1;

    if (r - l + 1 > m) {
      let leftChar = s[l];
      letters[leftChar]--;
      if (letters[leftChar] == 0) delete letters[leftChar];
      l++;
    }

    if (r - l + 1 == m) {
      if (isSameMap(letters, seen)) {
        res.push(l);
      }
    }
    r++;
  }
  return res;
};
