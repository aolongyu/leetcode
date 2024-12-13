/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  /**
   * 状态转移方程：dp(i,j)=1+min(dp(i,j-1),dp(i-1,j-1),dp(i-1,j))
   * 临界值：i=0||j=0
   * 结果：max(dp)
   */

  let dp = [];
  let len = 0;
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        dp[i][j] = 0;
        continue;
      }
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
        len = Math.max(len, dp[i][j]);
        continue;
      }
      if (
        matrix[i][j - 1] == 1 &&
        matrix[i - 1][j - 1] == 1 &&
        matrix[i - 1][j] == 1
      ) {
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]);
        len = Math.max(len, dp[i][j]);
        continue;
      }
      dp[i][j] = 1;
      len = Math.max(len, dp[i][j]);
    }
  }

  return len * len;
};
// @lc code=end

// output: 1
console.log(
  maximalSquare([
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0"],
  ])
);
// output: 4
console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
);
// output: 1
console.log(
  maximalSquare([
    ["0", "1"],
    ["1", "0"],
  ])
);
