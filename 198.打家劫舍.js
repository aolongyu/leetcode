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
  for (let i = 1; i < nums.length; i++) {
    handle = [Math.max(handle[0], handle[1] + nums[i]), handle[0]];
  }
  return handle[0];
};
// @lc code=end

// 4
console.log(rob([1, 2, 3, 1]));
// 12
console.log(rob([2, 7, 9, 3, 1]));
