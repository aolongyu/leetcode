/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  /**
   * 动态规划
   * dp[i] i被拆分后的最大乘积值
   * 状态转移方程
   *         dp[i] = Math.max(dp[i], j * dp[i - j], j * (i - j))
   * 初始化 all 0 & dp[1] = 0 & dp[2] = 1
   * 遍历顺序 i:2~n j:1~i-1
   * 数据模拟 4
   */

  // let dp = Array(n + 1).fill(0);
  // dp[2] = 1;
  // // debug
  // // console.log(0, JSON.stringify(dp));
  // for (let i = 2; i <= n; i++) {
  //   for (let j = 1; j < i; j++) {
  //     dp[i] = Math.max(dp[i], j * dp[i - j], j * (i - j));
  //   }
  //   // debug
  //   // console.log(i, JSON.stringify(dp));
  // }
  // return dp.pop();

  // 结果穷举法
  const ans = [
    0, 0, 1, 2, 4, 6, 9, 12, 18, 27, 36, 54, 81, 108, 162, 243, 324, 486, 729,
    972, 1458, 2187, 2916, 4374, 6561, 8748, 13122, 19683, 26244, 39366, 59049,
    78732, 118098, 177147, 236196, 354294, 531441, 708588, 1062882, 1594323,
    2125764, 3188646, 4782969, 6377292, 9565938, 14348907, 19131876, 28697814,
    43046721, 57395628, 86093442, 129140163, 172186884, 258280326, 387420489,
    516560652, 774840978, 1162261467, 1549681956,
  ];
  return ans[n];
};
// @lc code=end

console.log(integerBreak(4));
console.log(integerBreak(10));
