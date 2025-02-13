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
  // let dp = Array(cost.length).fill(0);
  // dp[0] = cost[0];
  // dp[1] = cost[1];
  // for (let i = 2; i < cost.length; i++) {
  //   dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  // }
  // return Math.min(dp.pop(), dp.pop());

  let a = cost[0];
  let b = cost[1];
  for (let i = 2; i < cost.length; i++) {
    [a, b] = [b, Math.min(a, b) + cost[i]];
  }
  return Math.min(a, b);
};
// @lc code=end

// 15
console.log(minCostClimbingStairs([10, 15, 20]));
// 6
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
