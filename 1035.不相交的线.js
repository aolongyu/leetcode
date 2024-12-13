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
  /**
   * 不相交，指的是最长公共子序列
   *
   * 动态规划
   * dp[i][j]  0~i-1的nums1和0～j-1的nums2的最长公共子序列
   * 状态转移方程
   *         nums1[i - 1] === nums2[j - 1]
   *         ? dp[i][j] = dp[i - 1][j - 1] + 1
   *         : dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
   * 初始化 all 0
   * 数据模拟 [1, 4, 2], [1, 2, 4]
   *         0 0 0 0
   *         0 1 1 1
   *         0 1 1 2
   *         0 1 2 2
   */

  let dp = Array.from({ length: nums1.length + 1 }, () =>
    Array(nums2.length + 1).fill(0)
  );
  // console.log(0, JSON.stringify(dp[0]));
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    // console.log(i, JSON.stringify(dp[i]));
  }
  return dp.pop().pop();
};
// @lc code=end

// 2
console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]));
// 3
console.log(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]));
// 2
console.log(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]));
