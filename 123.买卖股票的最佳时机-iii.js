/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let handle = [-prices[0], 0, -prices[0], 0];
  for (let i = 1; i < prices.length; i++) {
    handle = [
      Math.max(handle[0], -prices[i]),
      Math.max(handle[1], handle[0] + prices[i]),
      Math.max(handle[2], handle[1] - prices[i]),
      Math.max(handle[3], handle[2] + prices[i]),
    ];
    // console.log(JSON.stringify(handle));
  }
  return Math.max(...handle);
};
// @lc code=end

// 6
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
// 4
console.log(maxProfit([1, 2, 3, 4, 5]));
// 0
console.log(maxProfit([7, 6, 4, 3, 1]));
// 0
console.log(maxProfit([1], 0));
