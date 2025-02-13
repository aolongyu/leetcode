/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let n = s.length;
  let count = n;
  let dp = Array.from({ length: n }, () => Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        if (j - i === 1) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j]) {
        count++;
      }
    }
  }
  return count;
};
// @lc code=end

// 3
console.log(countSubstrings("abc"));
// 6
console.log(countSubstrings("aaa"));
