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
  // 物品 coins
  // 背包 amount
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    if (coin > amount) {
      continue;
    }
    for (let j = 1; j <= amount; j++) {
      if (coin > j) {
        continue;
      }
      dp[j] = Math.min(dp[j], dp[j - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end

// -1
console.log(coinChange([2], 3));
// 1
console.log(coinChange([1, 2, 5], 5));
// 0
console.log(coinChange([1], 0));
