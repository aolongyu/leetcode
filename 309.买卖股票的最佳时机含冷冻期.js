/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 买卖股票的最佳时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Updated: 2025/02/14 14:02:04
  /**
   * 0-持有 前一天：持有、冷冻、不持有
   * 1-卖出 前一天：持有
   * 2-冷冻 前一天：卖出
   * 3-不持有 前一天：冷冻、不持有
   */
  let prev = [-prices[0], 0, 0, 0];
  for (let i = 1; i < prices.length; i++) {
    prev = [
      // 0
      Math.max(prev[0], Math.max(prev[2], prev[3]) - prices[i]),
      // 1
      prev[0] + prices[i],
      // 2
      prev[1],
      // 3
      Math.max(prev[2], prev[3]),
    ];
  }
  return Math.max(...prev);
};
// @lc code=end

// 3
console.log(maxProfit([1, 2, 3, 0, 2]));
// 0
console.log(maxProfit([1]));
