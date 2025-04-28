// Given a string s, find the length of the longest substring without repeating characters.

/*

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

// Overall Complexities:
// Time Complexity: O(n)
// Space Complexity: O(n) (due to the set storing unique characters in the current window)

function usingSet() {
  // Create a new Set to store unique characters of the current window
  // Time: O(1), Space: O(n) in worst-case
  let set = new Set();

  let n = s.length - 1;
  let l = 0;
  let r = 0;
  let maxLength = 0;

  // Outer loop runs at most n times ⇒ O(n)
  while (r <= n) {
    // Inner loop: each character is removed at most once ⇒ O(n) total
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    maxLength = Math.max(maxLength, r - l + 1);
    r++;
  }

  return maxLength;
}

let s = "abcabcbb";

// Overall Complexities:
// Time Complexity: O(n)
// Space Complexity: O(n) (due to the set storing unique characters in the current window)

function longestSubstring(s) {
  // HashMap to store frequency of characters in the current window
  // Time: O(1) per operation, Space: O(n) in worst-case
  let hashMap = {};
  let l = 0;
  let r = 0;

  let maxLength = 0;

  // Outer loop runs up to n times ⇒ O(n)
  while (r < s.length) {
    let rightChar = s[r];
    hashMap[rightChar] = hashMap[rightChar] + 1 || 1;

    // This inner loop runs O(n) total across the whole string
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
