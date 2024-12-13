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
  /**
   * 动态规划
   * dp[i][j] 0～j-1的t在0～i-1的s中不同子序列个数
   * 状态转移方程
   *         s[i - 1] === t[j - 1]
   *         ? dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
   *         : dp[i][j] = dp[i - 1][j]
   * 初始化 all 0 & dp[i][0] = 1
   * 遍历顺序 s 1~length  t 1~length
   * 数据模拟 "rabbbit", "rabbit"
   *            r a b b i t
   *          1 0 0 0 0 0 0
   *        r 1 1 0 0 0 0 0
   *        a 1 1 1 0 0 0 0
   *        b 1 1 1 1 0 0 0
   *        b 1 1 1 2 1 0 0
   *        b 1 1 1 3 3 0 0
   *        i 1 1 1 3 3 3 0
   *        t 1 1 1 3 3 3 3
   */

  // 二维数组版本 时间复杂度O(s*t) 空间复杂度O(s*t)
  // let dp = Array.from({ length: s.length + 1 }, () =>
  //   Array(t.length + 1).fill(0)
  // );
  // for (let i = 0; i < s.length; i++) {
  //   dp[i][0] = 1;
  // }
  // // debug
  // // console.log(0, JSON.stringify(dp[0]));
  // for (let i = 1; i <= s.length; i++) {
  //   for (let j = 1; j <= t.length; j++) {
  //     if (s[i - 1] === t[j - 1]) {
  //       dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
  //     } else {
  //       dp[i][j] = dp[i - 1][j];
  //     }
  //   }
  //   // debug
  //   // console.log(i, JSON.stringify(dp[i]));
  // }
  // return dp.pop().pop();

  // 优化版 - 一维数组 时间复杂度O(s*t) 空间复杂度O(t)
  let dp = Array(t.length + 1).fill(0);
  dp[0] = 1;
  // debug
  // console.log(0, JSON.stringify(dp));
  for (let i = 1; i <= s.length; i++) {
    for (let j = t.length; j >= 1; j--) {
      if (s[i - 1] === t[j - 1]) {
        dp[j] = dp[j] + dp[j - 1];
      }
    }
    // debug
    // console.log(i, JSON.stringify(dp));
  }
  return dp.pop();
};
// @lc code=end

// 1
console.log(numDistinct("b", "b"));
// 3
console.log(numDistinct("rabbbit", "rabbit"));
// 5
console.log(numDistinct("babgbag", "bag"));
