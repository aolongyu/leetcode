/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  let len = s.length;
  if (len <= 1) {
    return len;
  }
  let dp = Array.from({ length: len }, () => Array(len).fill(0));
  // console.log(JSON.stringify(dp));
  for (let i = 0; i < len; i++) {
    dp[i][i] = 1;
  }
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  // for (let i = 0; i < dp.length; i++) {
  //   console.log(JSON.stringify(dp[i]));
  // }
  return dp[0][len - 1];
};
// @lc code=end

// output: 4
console.log(longestPalindromeSubseq("bbbab"));
// output: 2
console.log(longestPalindromeSubseq("cbbd"));
