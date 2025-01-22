//Given a string s consisting only of characters a, b and c.

// Return the number of substrings containing at least
// one occurrence of all these characters a, b and c.

/*

Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 

*/

function allThreeCharacter(s) {
  let count = 0;

  let lastSeen = Array.from(Array(3).fill(-1));

  for (let i = 0; i < s.length; i++) {
    lastSeen[s.charCodeAt(i) - 97] = i;

    if (lastSeen[0] !== -1 && lastSeen[1] !== -1 && lastSeen[2] !== -1) {
      let min1 = Math.min(lastSeen[0], lastSeen[1]);
      let min2 = Math.min(lastSeen[1], lastSeen[2]);
      let res = min1;
      if (min1 > min2) {
        res = min2;
      }
      count = count + (1 + res);
    }
  }
  return count;
}

let s = "abcabc";

console.log(allThreeCharacter(s));
