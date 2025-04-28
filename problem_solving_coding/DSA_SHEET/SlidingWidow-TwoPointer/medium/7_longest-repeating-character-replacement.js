//. You are given a string s and an integer k
// You can choose any character of the string and change it to any character
// You can perform this operation at most k times

// Return the length of the longest substring containing the same
// letter at most k letters

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's to make "BBAB".

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

function longestRepeatingCharacterReplacement(s, k) {
  let l = 0;
  let r = 0;
  let maxFreq = 0;
  let maxLength = 0;

  let char = {};

  while (r < s.length) {
    char[s[r]] = (char[s[r]] || 0) + 1;
    maxFreq = Math.max(maxFreq, char[s[r]]);

    let changes = r - l + 1 - maxFreq;
    if (changes > k) {
      char[s[l]]--;
      l++;
    }
    maxLength = Math.max(maxLength, r - l + 1);
    r++;
  }
  return maxLength;
}

let s = "AABABBA",
  k = 1;

console.log(longestRepeatingCharacterReplacement(s, k));
