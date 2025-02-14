/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Updated: 2025/02/14 14:53:02
  /**
   * dp
   */
  // let handle = [-prices[0], 0];
  // for (let i = 1; i < prices.length; i++) {
  //   handle = [
  //     Math.max(handle[0], handle[1] - prices[i]),
  //     Math.max(handle[1], handle[0] + prices[i]),
  //   ];
  // }
  // return handle[1];
  /**
   * tx
   */
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
};
// @lc code=end

// 7
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// 4
console.log(maxProfit([1, 2, 3, 4, 5]));
// 0
console.log(maxProfit([7, 6, 4, 3, 1]));
