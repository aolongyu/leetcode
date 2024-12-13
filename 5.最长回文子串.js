/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length;
  if (len < 2) {
    return s;
  }

  let maxLen = 0;
  let start = 0;
  let end = 0;

  var refreshAns = (i, j) => {
    if (maxLen < j - i + 1) {
      start = i;
      end = j;
      maxLen = j - i + 1;
    }
  };

  let dp = new Array(len);
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len; i++) {
      if (!dp[i]) {
        dp[i] = new Array(len);
      }

      if (i > j) {
        dp[i][j] = false;
        continue;
      }
      if (i === j) {
        dp[i][j] = true;
        refreshAns(i, j);
        continue;
      }
      if (s[i] !== s[j]) {
        dp[i][j] = false;
        continue;
      }
      if (i + 1 === j) {
        dp[i][j] = true;
        refreshAns(i, j);
        continue;
      }
      dp[i][j] = dp[i + 1][j - 1];
      dp[i][j] && refreshAns(i, j);
    }
  }

  return s.slice(start, end + 1);
};
// @lc code=end

// output: "bab"
console.log(longestPalindrome("babad"));
// output: "bb"
console.log(longestPalindrome("cbbd"));
