/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  /**
   * 动态规划
   * dp[j] 0~i中任选 的平方和为j值，所需要的最少个数为dp[j]
   * 状态转移方程
   *         j < nums[ii]
   *         ? dp[j]
   *         : Math.min(dp[j], dp[j - nums[ii]] + 1)
   * 初始化 all 0
   * 遍历方式 i:1~break j:1~n
   * 数据模拟 8
   *           - 0 1 2 3 4 5 6 7 8
   *         - 1 0 1 2 3 4 5 6 7 8
   *         - 4 0 1 2 3 1 2 3 4 2
   *         - 9 break
   */

  let dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; true; i++) {
    let ii = i * i;
    if (ii > n) {
      break;
    }
    for (let j = 1; j <= n; j++) {
      if (j < ii) {
        continue;
      }
      dp[j] = Math.min(dp[j], dp[j - ii] + 1);
    }
    // debug
    // console.log(i, JSON.stringify(dp));
  }
  return dp.pop();
};
// @lc code=end

// 3
console.log(numSquares(12));
// 2
console.log(numSquares(2));
// 2
console.log(numSquares(8));
