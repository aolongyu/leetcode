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
  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let str of strs) {
    let zeroCount = 0;
    let oneCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0") {
        zeroCount++;
      } else {
        oneCount++;
      }
    }

    for (let i = m; i >= zeroCount; i--) {
      for (let j = n; j >= oneCount; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroCount][j - oneCount] + 1);
      }
    }
  }
  // debug
  // console.log(JSON.stringify(dp));
  return dp.pop().pop();
};
// @lc code=end

// 4
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
// 2
console.log(findMaxForm(["10", "0", "1"], 1, 1));
