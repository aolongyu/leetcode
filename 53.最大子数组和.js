/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let prev = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
};
// @lc code=end

// 6
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
