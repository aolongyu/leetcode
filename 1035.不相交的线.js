/*
 * @lc app=leetcode.cn id=1035 lang=javascript
 *
 * [1035] 不相交的线
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  let dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    // console.log(JSON.stringify(dp[i]));
  }
  return dp[n1][n2];
};
// @lc code=end

// 2
console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]));
// 3
console.log(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]));
// 2
console.log(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]));
