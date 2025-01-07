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
  // 物品 1 2 4 9 16 ...
  // 背包 n
  // 可重复使用
  let dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; true; i++) {
    let ii = i * i;
    if (n < ii) {
      break;
    }
    for (let j = 1; j <= n; j++) {
      if (j < ii) {
        continue;
      }
      dp[j] = Math.min(dp[j], dp[j - ii] + 1);
    }
  }
  return dp[n];
};
// @lc code=end

// 3
console.log(numSquares(12));
// 2
console.log(numSquares(2));
// 2
console.log(numSquares(8));
