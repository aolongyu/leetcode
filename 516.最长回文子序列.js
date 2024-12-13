/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  /**
   * 动态规划
   * dp[i][j] i~j的s存在的最长回文子序列长度
   * 状态转移方程
   *         s[i] === s[j]
   *         ? dp[i + 1][j - 1] + 2
   *         : Math.max(dp[i + 1][j], dp[i][j - 1])
   * 初始化 all 0 & dp[i][i] = 1
   * 遍历顺序 j 1~length-1  i j-1~0
   * 数据模拟 bbbab
   *           b b b a b
   *         b 1 2 3 3 4
   *         b 0 1 2 2 3
   *         b 0 0 1 1 3
   *         a 0 0 0 1 1
   *         b 0 0 0 0 1
   */

  let dp = Array.from({ length: s.length }, () => Array(s.length).fill(0));
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }
  for (let j = 1; j < s.length; j++) {
    for (let i = j - 1; i >= 0; i--) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  // debug
  // for (let i = 0; i < dp.length; i++) {
  //   console.log(i, JSON.stringify(dp[i]));
  // }
  return dp.shift().pop();
};
// @lc code=end

// output: 4
console.log(longestPalindromeSubseq("bbbab"));
// output: 2
console.log(longestPalindromeSubseq("cbbd"));
