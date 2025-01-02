/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let stairs = cost.length;
  if (stairs <= 1) {
    return cost[0] || 0;
  }
  let dp = [cost[0], cost[1]];
  for (let i = 2; i < stairs; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  // console.log(JSON.stringify(dp));
  return Math.min(dp[stairs - 1], dp[stairs - 2]);
};
// @lc code=end

// 15
console.log(minCostClimbingStairs([10, 15, 20]));
// 6
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
