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
  let len = s.length;
  if (len <= 1) {
    return len;
  }
  let count = 0;
  let dp = Array.from({ length: len }, () => Array(len).fill(false));
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
        count += dp[i][j] ? 1 : 0;
      }
    }
    // console.log(JSON.stringify(dp[i]));
  }
  return count;
};
// @lc code=end

// 3
console.log(countSubstrings("abc"));
// 6
console.log(countSubstrings("aaa"));
