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
  // let dp = Array(nums.length).fill(0);
  // dp[0] = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //   dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  // }
  // return Math.max(...dp);
  let pre = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    max = Math.max(max, pre);
  }
  return max;
};
// @lc code=end

// 6
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
