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
  // let dp = Array(nums.length).fill(0);
  // dp[0] = nums[0];
  // dp[1] = Math.max(nums[0], nums[1]);

  // for (let i = 2; i <= nums.length; i++) {
  //   dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  // }
  // console.log(JSON.stringify(dp));

  // return dp[nums.length - 1];

  let a = nums[0];
  let b = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    [a, b] = [b, Math.max(b, a + nums[i])];
  }

  return b || a || 0;
};
// @lc code=end

// 4
console.log(rob([1, 2, 3, 1]));
// 12
console.log(rob([2, 7, 9, 3, 1]));
