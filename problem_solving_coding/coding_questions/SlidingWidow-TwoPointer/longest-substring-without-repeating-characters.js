// Given a string s, find the length of the longest substring without repeating characters.

/*

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

let s = "abcabcbb";

function longestSubstring(s) {
  let hashMap = {};
  let l = 0;
  let r = 0;

  let maxLength = 0;

  while (r < s.length) {
    let rightChar = s[r];
    hashMap[rightChar] = hashMap[rightChar] + 1 || 1;

    while (hashMap[rightChar] > 1) {
      let leftChar = s[l];
      hashMap[leftChar]--;
      l++;
    }
    maxLength = Math.max(maxLength, r - l + 1);

    r++;
  }

  return maxLength;
}

console.log(longestSubstring(s));
