/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  // 删s
  let n1 = s.length;
  let n2 = t.length;
  let dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));
  for (let i = 0; i <= n1; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  // for (let i = 0; i < dp.length; i++) {
  //   console.log(JSON.stringify(dp[i]));
  // }
  return dp[n1][n2];
};
// @lc code=end

// 1
console.log(numDistinct("b", "b"));
// 3
console.log(numDistinct("rabbbit", "rabbit"));
// 5
console.log(numDistinct("babgbag", "bag"));
