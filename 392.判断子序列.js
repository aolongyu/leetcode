/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // 删t
  // let n1 = s.length;
  // let n2 = t.length;
  // let dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(false));
  // for (let j = 0; j <= n2; j++) {
  //   dp[0][j] = true;
  // }
  // for (let i = 1; i <= n1; i++) {
  //   for (let j = 1; j <= n2; j++) {
  //     if (s[i - 1] === t[j - 1]) {
  //       dp[i][j] = dp[i - 1][j - 1];
  //     } else {
  //       dp[i][j] = dp[i][j - 1];
  //     }
  //   }
  // }
  // return dp[n1][n2];

  let p = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[p] === t[i]) {
      p++;
    }
  }
  return p === s.length;
};
// @lc code=end
console.log(isSubsequence("a", "b"));
// false
console.log(isSubsequence("ace", "abde"));
// true
console.log(isSubsequence("abc", "ahbgdc"));
// false
console.log(isSubsequence("axc", "ahbgdc"));
