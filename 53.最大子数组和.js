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
  /**
   * 动态规划
   * dp[i] 前i个nums数据中的最大子序列和
   * 状态转移方程
   *         nums[i] = Math.max(nums[i], dp[i - 1] + nums[i])
   * 初始化 all 0 & dp[0] = nums[0]
   * 遍历顺序 从1开始遍历
   * 数据模拟 [-2, 1, -3, 4, -1, 2, 1, -5, 4]
   *         -2 1 -2 4 3 5 6 1 5
   */

  // 一维数组
  // let dp = Array(nums.length).fill(0);
  // dp[0] = nums[0];
  // // console.log(0, JSON.stringify(dp));
  // for (let i = 1; i < nums.length; i++) {
  //   dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
  //   // console.log(i, JSON.stringify(dp));
  // }
  // return Math.max(...dp);

  // 优化版本 - 数组压缩
  let preSub = nums[0];
  let maxSub = nums[0];
  // console.log(preSub);
  for (let i = 1; i < nums.length; i++) {
    preSub = Math.max(nums[i], preSub + nums[i]);
    maxSub = Math.max(preSub, maxSub);
    // console.log(preSub);
  }
  return maxSub;
};
// @lc code=end

// 6
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
