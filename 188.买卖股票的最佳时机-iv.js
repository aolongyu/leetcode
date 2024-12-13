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
  let handle = Array(2 * k).fill(0);
  for (let i = 0; i < handle.length; i++) {
    if (i % 2 === 0) {
      handle[i] = -prices[0];
    }
  }
  // console.log(JSON.stringify(handle));
  for (let i = 1; i < prices.length; i++) {
    for (let j = 0; j < 2 * k; j += 2) {
      handle[j] = Math.max(handle[j], (handle[j - 1] || 0) - prices[i]);
      handle[j + 1] = Math.max(handle[j + 1], handle[j] + prices[i]);
    }
    // console.log(JSON.stringify(handle));
  }

  return handle.pop();
};
// @lc code=end

// 2
console.log(maxProfit(2, [2, 4, 1]));
// 7
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]));
// 6
console.log(maxProfit(2, [3, 3, 5, 0, 0, 3, 1, 4]));
