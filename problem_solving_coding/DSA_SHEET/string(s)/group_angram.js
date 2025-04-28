/* 

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2: 

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Approach 1 TC: O(m*nlogn) SC: O(n)
function groupAnagrams(strs) {
  let ans = {};

  for (let s of strs) {
    let key = s.split("").sort().join("");

    if (!ans[key]) {
      ans[key] = [];
    }

    ans[key].push(s);
  }

  return Object.values(ans);
}

// Approach 2 TC: O(m*n) SC: O(n)
function groupAnagramsWithCharacterFrequency(strs) {
  let map = new Map();

  for (let s of strs) {
    let characterFreq = new Array(26).fill(0);

    for (let c in s) {
      characterFreq[s.charCodeAt(c) - 97]++;
    }

    let key = characterFreq.toString();

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(s);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(strs));
console.log(groupAnagramsWithCharacterFrequency(strs));
