/* find the length of the longest substring
 without repeating characters.

    Input: s = "abcabcbb"
    Output: 3

    Input: s = "pwwkew" **wke**
    Output: 3

  -> Approach 1: Sliding Window and Set TC O(n)
  -> Approach 2: Sliding Window and Hashing TC O(n)

*/

function longestSubstringUsingSet(str) {
  let charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }
    charSet.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

function longestSubstringUsingHashing(str) {
  let char = {};

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    let ch = str[right];
    char[ch] = (char[ch] || 0) + 1;

    console.log(char)
    while (char[ch] > 1) {
      char[str[left]] -= 1;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

let str = "abcabcbb";
let str2 = "pwwkew";
console.log(longestSubstringUsingSet(str));
console.log(longestSubstringUsingHashing(str2));
