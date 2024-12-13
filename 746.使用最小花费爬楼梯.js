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
  /**
   * 动态规划
   * dp[i] 到达阶梯i时的最小花费
   * 状态转移方程
   *         dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
   * 初始化 dp[0] = cost[0] dp[1] = cost[1]
   * 遍历顺序 i 2~length-1
   * 数据模拟 [10, 15, 20]
   *         -  0  1  2
   *           10 15 30
   *
   *         [1, 100,1, 1, 1,100,1, 1,100,1]
   *         - 0  1  2  3  4  5  6  7  8  9
   *           1 100 2  3  3 103 4  5 104 6
   */

  // 一维数组 空间O(n) 时间O(n)
  // let dp = Array(cost.length);
  // dp[0] = cost[0];
  // dp[1] = cost[1];
  // for (let i = 2; i < cost.length; i++) {
  //   dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  // }
  // // debug
  // // console.log(JSON.stringify(dp));
  // return Math.min(dp[cost.length - 1], dp[cost.length - 2]);

  // 优化版 空间O(1) 时间O(n)
  if (cost.length <= 2) {
    return Math.min(...cost);
  }
  let a = cost[0];
  let b = cost[1];
  for (let i = 2; i < cost.length; i++) {
    [a, b] = [b, cost[i] + Math.min(a, b)];
  }
  return Math.min(a, b);
};
// @lc code=end

// 15
console.log(minCostClimbingStairs([10, 15, 20]));
// 6
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
