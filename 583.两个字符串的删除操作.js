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
  /**
   * 动态规划
   * dp[i][j] 0~i-1的word1和0～j-1的word2要达到相同，需要多少步删除操作
   * 状态转移方程
   *         word1[i - 1] === word2[j - 1]
   *         ? dp[i][j] = dp[i - 1][j - 1]
   *         : dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
   * 初始化 all 0 & dp[i][0] = i & dp[0][j] = j & dp[0][0] = 0
   * 遍历顺序 word1 1～length word2 1~word2
   * 数据模拟 "sea", "eat"
   *           - e a t
   *         - 0 1 2 3
   *         s 1 2 3 4
   *         e 2 1 2 3
   *         a 3 2 1 2
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
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
    // debug
    // console.log(i, JSON.stringify(dp[i]));
  }
  return dp.pop().pop();
};
// @lc code=end

// 2
console.log(minDistance("sea", "eat"));
// 4
console.log(minDistance("leetcode", "etco"));
