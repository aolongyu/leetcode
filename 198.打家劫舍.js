/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let handle = [nums[0], 0];
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    handle = [nums[i] + handle[1], Math.max(handle[0], handle[1])];
  }
  return Math.max(handle[0], handle[1]);
};
// @lc code=end

// 4
console.log(rob([1, 2, 3, 1]));
// 12
console.log(rob([2, 7, 9, 3, 1]));
