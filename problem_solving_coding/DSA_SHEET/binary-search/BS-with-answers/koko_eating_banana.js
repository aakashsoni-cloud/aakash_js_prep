// https://leetcode.com/problems/koko-eating-bananas/description/
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
// Return the minimum integer k such that she can eat all the bananas within h hours.
/*

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4

*/

// Brute force - Approach 1 TC : O(n*max(arr))

function minEatingSpeed(piles, h) {

}

let piles = [3, 6, 7, 11];
let h = 8;
console.log(minEatingSpeed(piles, h));

// Approach 2 : TC : O(nlog(max(arr)))
