/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var dp = [[1]];
  for (let i = 1; i < numRows; i++) {
    dp[i] = [1];
    for (let j = 1; j <= i; j++) {
      dp[i][j] = (dp[i - 1][j - 1] || 0) + (dp[i - 1][j] || 0);
    }
  }
  return dp;
};
// @lc code=end

console.log(JSON.stringify(generate(5)));
