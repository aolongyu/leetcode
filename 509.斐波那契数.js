/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  /**
   * 动态规划
   * dp[i] = 数列的第i为数值
   * 状态转移方程
   *         dp[i] = dp[i - 1] + dp[i - 1]
   * 初始化 dp[0] = 0 dp[1] = 1
   * 遍历顺序 i 2~n
   * 数据模拟 4
   *         0 1 2 3 4
   *         0 1 1 2 3
   */

  // 一维数组 空间O(n) 时间O(n)
  // let dp = Array(n);
  // dp[0] = 0;
  // dp[1] = 1;
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2];
  // }
  // // console.log(JSON.stringify(dp));
  // return dp[n];

  // 数组压缩 空间O(1) 时间O(n)
  if (n <= 1) {
    return n;
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};
// @lc code=end

// 3
console.log(fib(4));
