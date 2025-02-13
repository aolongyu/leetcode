/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  // 物品 strs 不可重复使用
  // 双背包 0背包m 1背包n
  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let str of strs) {
    let zero = 0;
    let one = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0") {
        zero++;
      } else {
        one++;
      }
    }
    for (let i = m; i >= zero; i--) {
      for (let j = n; j >= one; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1);
      }
    }
  }
  return dp[m][n];
};
// @lc code=end

// 4
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
// 2
console.log(findMaxForm(["10", "0", "1"], 1, 1));
