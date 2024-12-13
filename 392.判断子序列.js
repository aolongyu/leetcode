/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  /**
   * 方法一：动态规划
   * dp[i][j] 0~i-1的s和0～j-1的t的最长公共子序列
   * 状态转移方程
   *         s[i - 1] === t[j - 1]
   *         ? dp[i][j] = dp[i - 1][j - 1] + 1
   *         : dp[i][j] = Math.max(dp[i][j - 1], dp[i][j - 1])
   * 初始化 all 0
   * 遍历顺序 s 1～length  t 1～length
   * 数据模拟  "ace", "abde"
   *         0 0 0 0 0
   *         0 1 1 1 1
   *         0 1 1 1 1
   *         0 1 1 1 2
   * 数据模拟  "abc", "ahbgdc"
   *         0 0 0 0 0 0 0
   *         0 1 1 1 1 1 1
   *         0 1 1 2 2 2 2
   *         0 1 1 2 2 2 3
   */

  // let dp = Array.from({ length: s.length + 1 }, () =>
  //   Array(t.length + 1).fill(0)
  // );
  // // debug
  // // console.log(0, JSON.stringify(dp[0]));
  // for (let i = 1; i <= s.length; i++) {
  //   for (let j = 1; j <= t.length; j++) {
  //     if (s[i - 1] === t[j - 1]) {
  //       dp[i][j] = dp[i - 1][j - 1] + 1;
  //     } else {
  //       dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
  //     }
  //   }
  //   // debug
  //   // console.log(i, JSON.stringify(dp[i]));
  // }
  // return dp.pop().pop() === s.length;

  /**
   * 方法二：指针
   */
  let p = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[p] === t[i]) {
      p++;
    }
  }
  return p === s.length;
};
// @lc code=end

// false
console.log(isSubsequence("ace", "abde"));
// true
console.log(isSubsequence("abc", "ahbgdc"));
// false
console.log(isSubsequence("axc", "ahbgdc"));
