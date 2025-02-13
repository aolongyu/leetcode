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
  // 0 持有
  // 1 买出
  // 2 冷冻
  // 3 未持有
  // let n = prices.length;
  // let dp = Array.from({ length: n }, () => Array(4).fill(0));
  // dp[0][0] = -prices[0];
  // for (let i = 1; i < n; i++) {
  //   dp[i] = [
  //     // 今天持有的前提：昨天 持有/未持有/冷冻
  //     Math.max(dp[i - 1][0], Math.max(dp[i - 1][2], dp[i - 1][3]) - prices[i]),
  //     // 今天买出的前提：昨天 持有
  //     Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]),
  //     // 今天冷冻的前提：昨天 买出
  //     Math.max(dp[i - 1][2], dp[i - 1][1]),
  //     // 今天未持有的前提：昨天 冷冻/未持有
  //     Math.max(dp[i - 1][3], dp[i - 1][2]),
  //   ]
  // }
  // return dp[n - 1][1];

  // 数组压缩
  let n = prices.length;
  let handle = [-prices[0], 0, 0, 0];
  for (let i = 1; i < n; i++) {
    handle = [
      Math.max(handle[0], Math.max(handle[2], handle[3]) - prices[i]),
      Math.max(handle[1], handle[0] + prices[i]),
      Math.max(handle[2], handle[1]),
      Math.max(handle[3], handle[2]),
    ];
  }
  return handle[1];
};
// @lc code=end

// 3
console.log(maxProfit([1, 2, 3, 0, 2]));
// 0
console.log(maxProfit([1]));
