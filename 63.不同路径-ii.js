/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  /**
   * 动态规划
   * dp[i][j]  到达i行j列有dp[i][j]种不同路径
   * 状态转移方程
   *         obstacleGrid[i][j] === 1
   *         ? dp[i][j] = 0
   *         : dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
   * 初始化 dp[i][0] before obstacle 1 otherwise 0
   *       dp[0][j] before obstacle 1 otherwise 0
   * 遍历顺序 i: 1~m-1 j: 1~n-1
   * 数据模拟 [0, 0, 0],
   *         [0, 1, 0],
   *         [0, 0, 0],
   *           - 0 1 2
   *         - 0 1 1 1
   *         - 1 1 0 1
   *         - 2 1 1 2
   */

  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let dp = Array.from({ length: m }, () => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      break;
    }
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      break;
    }
    dp[0][j] = 1;
  }
  // debug
  // console.log(0, JSON.stringify(dp[0]));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
    // debug
    // console.log(i, JSON.stringify(dp[i]));
  }
  return dp.pop().pop();
};
// @lc code=end

// output: 2
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
// output: 1
console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
);
