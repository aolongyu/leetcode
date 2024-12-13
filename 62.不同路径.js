/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  /**
   * 动态规划
   * dp[i][j] 到达i行j列有dp[i][j]种不同路径
   * 状态转移方程
   *         dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
   * 初始化 all 1
   * 遍历顺序 i:1~m-1 j:1~n-1
   * 数据模拟 3, 7
   *           - 0 1 2 3   4 5  6
   *         - 0 1 1 1 1   1 1  1
   *         - 1 1 2 3 4   5 6  7
   *         - 2 1 3 6 10 15 21 28
   */

  let dp = Array.from({ length: m }, () => Array(n).fill(1));
  // debug
  // console.log(0, JSON.stringify(dp[0]));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
    // debug
    // console.log(i, JSON.stringify(dp[i]));
  }
  return dp.pop().pop();
};
// @lc code=end

// 28
console.log(uniquePaths(3, 7));
// 3
console.log(uniquePaths(3, 2));
