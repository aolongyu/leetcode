/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let n1 = word1.length;
  let n2 = word2.length;
  let dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));
  for (let i = 0; i <= n1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n2; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[n1][n2];
};
// @lc code=end

// 2
console.log(minDistance("sea", "eat"));
// 4
console.log(minDistance("leetcode", "etco"));
