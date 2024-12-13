/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  /**
   * 状态转移方程：F(i,j) = min(F(i-1,j-1),F(i-1,j),F(i-1,j+1))
   * 临界值：i=0时dp(i,j)=matrix(i,j)
   * 输出值：min(...dp[n - 1])
   */
  let n = matrix.length;
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        dp[i][j] = matrix[i][j];
        continue;
      }
      let preOne = j - 1 < 0 ? Infinity : dp[i - 1][j - 1];
      let preTwo = dp[i - 1][j];
      let preThree = j + 1 >= n ? Infinity : dp[i - 1][j + 1];
      let preMin = Math.min(preOne, preTwo, preThree);
      dp[i][j] = matrix[i][j] + preMin;
    }
  }

  return Math.min(...dp[n - 1]);
};
// @lc code=end

// output: 13
console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
);
// output: -59
console.log(
  minFallingPathSum([
    [-19, 57],
    [-40, -5],
  ])
);
