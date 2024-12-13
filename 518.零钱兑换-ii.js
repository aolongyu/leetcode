/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  /**
   * 动态规划
   * dp[j] 0～i的coins中，兑换满j元，有dp[j]中方法
   * 状态转移方程
   *         j < coins[i]
   *         ? dp[j]
   *         : dp[j] + dp[j - coins[i]]
   * 初始化 all 0 & dp[0] = 1
   * 遍历顺序 i:0~coins.length-1 j:0~amount
   * 数据模拟 5, [1, 2, 5]
   *           - 0 1 2 3 4 5
   *         - 1 1 1 1 1 1 1
   *         - 2 1 1 2 2 3 3
   *         - 5 1 1 2 2 3 4
   */

  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      let r = j - coins[i];
      dp[j] += dp[r];
    }
    // debug
    // console.log(i, JSON.stringify(dp));
  }
  return dp.pop();
};
// @lc code=end

// 4
console.log(change(5, [1, 2, 5]));
// 0
console.log(change(3, [2]));
// 1
console.log(change(10, [5]));
