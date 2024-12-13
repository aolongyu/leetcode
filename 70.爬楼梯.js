/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let m = 2;
  /**
   * 动态规划
   * dp[j] 0~i步数任选，到达j台阶有dp[j]种方法
   * 状态转移方程
   *         j < i
   *         ? dp[j]
   *         : dp[j] + dp[j - i]
   * 初始化 all 0 & dp[0] = 1
   * 遍历顺序 j:0~n i:1~m
   * 数据模拟 2 5
   *           - 0 1 2 3 4 5
   *         - 1 1 1 1 2 3 5
   *         - 2 1 1 2 3 5 8
   */

  let dp = Array(n + 1).fill(0);
  dp[0] = 1;
  for (let j = 0; j <= n; j++) {
    for (let i = 1; i <= m; i++) {
      if (j < i) {
        continue;
      }
      let r = j - i;
      dp[j] += dp[r];
    }
  }

  // debug
  // console.log(JSON.stringify(dp));
  return dp.pop();
};
// @lc code=end

//
console.log(climbStairs(5));
