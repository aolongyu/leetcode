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
  let n1 = nums1.length;
  let n2 = nums2.length;
  let dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));
  let res = 0;
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
    }
    res = Math.max(res, ...dp[i]);
  }
  return res;
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
