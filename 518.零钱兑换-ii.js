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
  // 物品 coins
  // 背包 amount
  // 不在乎顺序 组合
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j < coins[i]) {
        continue;
      }
      dp[j] += dp[j - coins[i]];
    }
  }
  return dp[amount];
};
// @lc code=end

// 4
console.log(change(5, [1, 2, 5]));
// 0
console.log(change(3, [2]));
// 1
console.log(change(10, [5]));
