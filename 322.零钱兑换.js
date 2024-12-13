/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  /**
   * 动态规划
   * dp[j] 0~i的硬币中任选，凑成总额为j，所需要的最少硬币数
   * 状态转移方程
   *         j < coins[i]
   *         ? dp[j]
   *         : Math.min(dp[j], dp[j - coins[i]] + 1)
   * 初始化 all 0 & dp[j] = j / coins[0]
   * 遍历方式 i:0~coins.length-1 j:0~amount
   * 数据模拟 [1, 2, 5], 5
   *           - 0 1 2 3 4 5
   *         - 1 0 1 2 3 4 5
   *         - 2 0 1 1 2 2 3
   *         - 5 0 1 1 2 2 1
   */

  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  // debug
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      if (j < coins[i]) {
        continue;
      }
      let r = j - coins[i];
      dp[j] = Math.min(dp[j], dp[r] + 1);
    }
    // debug
    // console.log(i, JSON.stringify(dp));
  }
  let ans = dp.pop();
  return ans === Infinity ? -1 : ans;
};
// @lc code=end

// -1
console.log(coinChange([2], 3));
// 1
console.log(coinChange([1, 2, 5], 5));
// 0
console.log(coinChange([1], 0));
