/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  // Updated: 2025/02/14 14:51:50
  let prev = Array(2 * k).fill(0);
  for (let i = 0; i < 2 * k; i += 2) {
    prev[i] = -prices[0];
  }
  for (let i = 1; i < prices.length; i++) {
    for (let j = 0; j < 2 * k; j += 2) {
      prev[j + 1] = Math.max(prev[j + 1], prev[j] + prices[i]);
      prev[j] = Math.max(prev[j], (prev[j - 1] || 0) - prices[i]);
    }
  }
  return Math.max(...prev);
};
// @lc code=end

// 2
console.log(maxProfit(2, [2, 4, 1]));
// 7
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]));
// 6
console.log(maxProfit(2, [3, 3, 5, 0, 0, 3, 1, 4]));
