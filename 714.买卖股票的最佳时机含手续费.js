/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let handle = [-prices[0], 0];

  for (let i = 1; i < prices.length; i++) {
    // 今天持有 - 前一天：持有、不持有-price
    // 今天不持有 - 前一天：持有+price-fee、不持有
    handle = [
      Math.max(handle[0], handle[1] - prices[i]),
      Math.max(handle[1], handle[0] + prices[i] - fee),
    ];
    // console.log(i, JSON.stringify(handle));
  }

  return handle[1];
};
// @lc code=end

// 8
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
// 6
console.log(maxProfit([1, 3, 2, 8, 4, 9], 3));
