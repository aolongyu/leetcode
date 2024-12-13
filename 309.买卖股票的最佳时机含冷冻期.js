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
  let dp = Array(prices.length)
    .fill()
    .map(() => Array(4).fill(0));
  // 0持有
  // 1卖出
  // 2冷冻
  // 3不持有（非冷冻）
  dp[0] = [-prices[0], 0, 0, 0];
  for (let i = 1; i < prices.length; i++) {
    // 今天为持有 -前一天：持有、冷冻、不持有
    dp[i][0] = Math.max(
      dp[i - 1][0],
      dp[i - 1][2] - prices[i],
      dp[i - 1][3] - prices[i]
    );
    // 今天为卖出 -前一天：持有
    dp[i][1] = dp[i - 1][0] + prices[i];
    // 今天为冷冻 -前一天：卖出
    dp[i][2] = dp[i - 1][1];
    // 今天为不持有 -前一天：冷冻、不持有
    dp[i][3] = Math.max(dp[i - 1][2], dp[i - 1][3]);

    // console.log(i, JSON.stringify(dp[i]));
  }

  return Math.max(...dp.pop());
};
// @lc code=end

// 3
console.log(maxProfit([1, 2, 3, 0, 2]));
// 0
console.log(maxProfit([1]));
