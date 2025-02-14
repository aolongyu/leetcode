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
  // Updated: 2025/02/14 13:47:37
  // let n = prices.length;
  // let dp = [];
  // dp[0] = [-prices[0], 0];
  // for (let i = 1; i < n; i++) {
  //   dp[i] = [
  //     Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]),
  //     Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee),
  //   ];
  // }
  // return dp[n - 1][1];

  // 数组压缩
  let n = prices.length;
  let prev = [-prices[0], 0];
  for (let i = 1; i < n; i++) {
    prev = [
      Math.max(prev[0], prev[1] - prices[i]),
      Math.max(prev[1], prev[0] + prices[i] - fee),
    ];
  }
  return prev[1];
};
// @lc code=end

// 8
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
// 6
console.log(maxProfit([1, 3, 2, 8, 4, 9], 3));
