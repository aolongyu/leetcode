/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let dp = [];
  let len = triangle.length;

  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let j = 0; j <= i; j++) {
      if (i === 0) {
        dp[i][j] = triangle[i][j];
        continue;
      }
      if (j === 0) {
        dp[i][j] = triangle[i][j] + dp[i - 1][j];
        continue;
      }
      dp[i][j] =
        triangle[i][j] +
        Math.min(
          dp[i - 1][j] === 0 ? 0 : dp[i - 1][j] ? dp[i - 1][j] : Infinity,
          dp[i - 1][j - 1]
        );
    }
  }

  return Math.min(...dp[len - 1]);
};
// @lc code=end

// output: 11
console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
// output: -10
console.log(minimumTotal([[-10]]));
