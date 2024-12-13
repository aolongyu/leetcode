/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  /**
   * 动态规划
   * dp[i][j]  0～i-1的text1字符串和0～j-1的text2字符串的坐场公共子序列长度
   * 状态转移方程
   *           if (text1[i - 1] === text2[j - 1])
   *           true: dp[i][j] = dp[i - 1][j - 1] + 1
   *           false: dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
   * 初始化 all 0
   */

  let dp = Array.from({ length: text1.length + 1 }, () =>
    Array(text2.length + 1).fill(0)
  );
  // console.log(0, JSON.stringify(dp[0]));
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    // console.log(i, JSON.stringify(dp[i]));
  }
  return dp.pop().pop();
};
// @lc code=end

// 3
console.log(longestCommonSubsequence("abcde", "ace"));
// 3
console.log(longestCommonSubsequence("abc", "abc"));
// 0
console.log(longestCommonSubsequence("abc", "def"));
// 1
console.log(longestCommonSubsequence("bl", "yby"));
