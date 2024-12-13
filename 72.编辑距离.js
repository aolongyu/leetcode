/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  /**
   * 动态规划
   * dp[i][j] 0~i-1的word1转换为0～j-1的word2所需要的最小步数
   * 状态转移方程
   *         word1[i - 1] === word2[j - 1]
   *         ? dp[i][j] = dp[i - 1][j - 1]
   *         : dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
   * 初始化  all 0 & dp[i][0] = i & dp[0][j] = j & dp[0][0] = 0
   * 数据模拟
   *           - r o s
   *         - 0 1 2 3
   *         h 1 1 2 3
   *         o 2 2 1 2
   *         r 3 2 2 2
   *         s 4 3 3 2
   *         e 5 4 4 3
   */

  let dp = Array.from({ length: word1.length + 1 }, () =>
    Array(word2.length + 1).fill(0)
  );
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j;
  }
  // debug
  // console.log(0, JSON.stringify(dp[0]));
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
    // debug
    // console.log(i, JSON.stringify(dp[i]));
  }
  return dp.pop().pop();
};
// @lc code=end

// 3
console.log(minDistance("horse", "ros"));
// 5
console.log(minDistance("intention", "execution"));
