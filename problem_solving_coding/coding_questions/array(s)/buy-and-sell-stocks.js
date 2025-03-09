let prices = [7, 1, 5, 3, 6, 4];
// Output: 5
// Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function bestTimeToBuyAndSellStock(prices) {
  let l = 0;
  let r = 0;
  let maxProfit = 0;
  let profit = 0;

  while (r < prices.length) {
    profit = prices[r] - prices[l];
    if (prices[l] > prices[r]) {
      l = r;
    }
    maxProfit = Math.max(maxProfit, profit);
    r++;
  }
  return maxProfit;
}

console.log(bestTimeToBuyAndSellStock(prices));
