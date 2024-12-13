/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  /**
   * 动态规划
   * dp[i][j]  i~j的s字符串是否为回文串
   * 状态转移方程
   *         s[i] === s[j]
   *         ? j - i <= 1
   *           ? dp[i][j] = true
   *           : dp[i][j] = dp[i + 1][j - 1]
   *         : void 0
   * 初始化 all false & dp[i][i] = true
   * 遍历顺序 先j 1～length-1  后i j-1~0
   * 数据模拟 "abc"
   *           a b c
   *         a 1 0 0
   *         b 0 1 0
   *         c 0 0 1
   *
   *         aaa
   *           a a a
   *         a 1 1 1
   *         a 0 1 1
   *         a 0 0 1
   */

  let dp = Array.from({ length: s.length }, () => Array(s.length).fill(false));
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    count++;
  }
  for (let j = 1; j < s.length; j++) {
    for (let i = j - 1; i >= 0; i--) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      dp[i][j] && count++;
    }
  }
  // for (let i = 0; i < dp.length; i++) {
  //   console.log(i, JSON.stringify(dp[i]));
  // }
  return count;
};
// @lc code=end

// 3
console.log(countSubstrings("abc"));
// 6
console.log(countSubstrings("aaa"));
