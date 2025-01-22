let prices = [7, 1, 5, 3, 6, 4];
// Output: 5

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
