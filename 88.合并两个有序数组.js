/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let tail = m + n - 1;
  while (tail >= 0) {
    if (p1 === -1 || nums1[p1] < nums2[p2]) {
      nums1[tail] = nums2[p2];
      p2--;
      tail--;
      continue;
    }
    if (p2 === -1 || nums1[p1] > nums2[p2]) {
      nums1[tail] = nums1[p1];
      p1--;
      tail--;
      continue;
    }
    nums1[tail] = nums1[p1];
    p1--;
    tail--;
    nums1[tail] = nums2[p2];
    p2--;
    tail--;
  }
  // debug
  // console.log(nums1);
};
// @lc code=end

merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
