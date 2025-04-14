/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

*/

let num = 154;
// Output: 4

function addDigits(num) {
  if (Math.floor(num / 10) == 0) return num;
  let rem = Math.floor(num / 10); // 154 / 10 = 15
  num = (num % 10) + rem; // 154 % 10 = 4
  return addDigits(num);
}

console.log(addDigits(num));
