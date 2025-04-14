/*

You are given an array prices where prices[i] is the price of a 
given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and 
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

*/

// NOTE: Buy at low price and sell at larger prices
// first need to buy and then sell


// TC: O(N) SC: O(1)

function stockBuyAndSell(prices) {
  let n = prices.length;
  let maxProfit = 0;

  let l = 0;
  let r = 1;

  while (r < n) {
    let profit = prices[r] - prices[l];

    if (prices[r] < prices[l]) {
      l = r;
    }

    maxProfit = Math.max(maxProfit, profit);
    r++;
  }

  return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(stockBuyAndSell(prices));
