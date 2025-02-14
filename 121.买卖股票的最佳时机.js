/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Updated: 2025/02/14 14:57:13
  /**
   * dp
   */
  // let handle = [-prices[0], 0];
  // for (let i = 1; i < prices.length; i++) {
  //   handle = [
  //     Math.max(handle[0], -prices[i]),
  //     Math.max(handle[1], handle[0] + prices[i]),
  //   ];
  // }
  // return handle[1];
  /**
   * tx
   */
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
};
// @lc code=end

// 5
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
