/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0]?.length ?? 0;
  let dp = [];

  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      if (i + j === 0) {
        dp[i][j] = grid[i][j];
        continue;
      }
      if (i === 0 && j !== 0) {
        dp[i][j] = grid[i][j] + dp[i][j - 1];
        continue;
      }
      if (i !== 0 && j === 0) {
        dp[i][j] = grid[i][j] + dp[i - 1][j];
        continue;
      }
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end

// 7
console.log(
  JSON.stringify(
    minPathSum([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ])
  )
);
// 12
console.log(
  JSON.stringify(
    minPathSum([
      [1, 2, 3],
      [4, 5, 6],
    ])
  )
);
