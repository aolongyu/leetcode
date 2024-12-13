/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  /**
   * 动态规划
   * dp[i][j] 0~i-1的nums1数组和0～j-1的nums2数组中存在的最长重复子数组数
   * 状态转移方程
   *         if (nums1[i - 1] === nums2[j - 1]) dp[i][j] = dp[i - 1][j - 1]
   *                                       else dp[i][j] = 0
   * 初始化 all 0
   */

  // 二维数组
  // let length1 = nums1.length;
  // let length2 = nums2.length;
  // let maxLength = 0;
  // let dp = Array.from({ length: length1 + 1 }, () =>
  //   Array(length2 + 1).fill(0)
  // );
  // // console.log(0, JSON.stringify(dp[0]));
  // for (let i = 1; i <= length1; i++) {
  //   for (let j = 1; j <= length2; j++) {
  //     if (nums1[i - 1] === nums2[j - 1]) {
  //       dp[i][j] = dp[i - 1][j - 1] + 1;
  //     }
  //   }
  //   // console.log(i, JSON.stringify(dp[i]));
  //   maxLength = Math.max(maxLength, ...dp[i]);
  // }
  // return maxLength;

  // 版本优化 数组压缩（一维）
  let length1 = nums1.length;
  let length2 = nums2.length;
  let maxLength = 0;
  let dp = Array(length2 + 1).fill(0);
  for (let i = 1; i <= length1; i++) {
    for (let j = length2; j >= 1; j--) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[j] = dp[j - 1] + 1;
      } else {
        dp[j] = 0
      }
    }
    maxLength = Math.max(maxLength, ...dp);
    // console.log(i, JSON.stringify(dp));
  }

  return maxLength;
};
// @lc code=end

// 4
console.log(findLength([0, 0, 0, 0, 1], [1, 0, 0, 0, 0]));
// 3
console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
// 5
console.log(findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]));
// 3
console.log(findLength([1, 0, 0, 0, 1], [1, 0, 0, 1, 1]));
