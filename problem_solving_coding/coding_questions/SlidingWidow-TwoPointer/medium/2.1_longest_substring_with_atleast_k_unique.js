/*
Given a string s and an integer k, return the length of the longest substring of
 s such that the frequency of each character in this substring is greater than or equal to k.

if no such substring exists, return 0.

 
Example 1:

Input: s = "aaabb", k = 3
Output: 3
Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.

*/

let s = "aaabb",
  k = 3;
function longestSubstring(s, k) {
  let maxLength = 0;
  const n = s.length;

  for (let targetUnique = 1; targetUnique <= 26; targetUnique++) {
    let freq = {};
    let l = 0,
      r = 0;
    let uniqueCount = 0;
    let countAtLeastK = 0;

    while (r < n) {
      // Expand right
      freq[s[r]] = (freq[s[r]] || 0) + 1;
      if (freq[s[r]] === 1) uniqueCount++; // new unique char
      if (freq[s[r]] === k) countAtLeastK++; // reached k frequency

      // Shrink if too many unique chars
      while (uniqueCount > targetUnique) {
        freq[s[l]]--;
        if (freq[s[l]] === k - 1) countAtLeastK--; // dropped below k
        if (freq[s[l]] === 0) uniqueCount--; // removed char
        l++;
      }

      // Check if current window is valid
      if (uniqueCount === countAtLeastK && uniqueCount === targetUnique) {
        maxLength = Math.max(maxLength, r - l + 1);
      }

      r++;
    }
  }

  return maxLength;
}
