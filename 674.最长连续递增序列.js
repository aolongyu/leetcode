/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  /**
   * 动态规划
   * dp[i] 0~i的数组中的最长连续递增子序列长度
   * 状态转移方程
   *      if (nums[i] > nums[i - 1]) dp[i] = dp[i - 1] + 1
   *                           else  dp[i] = 1
   * 初始化 all 1
   * 遍历顺序：从1开始正向遍历
   */

  // 动态规划：一维数组
  // let dp = Array(nums.length).fill(1);
  // // console.log(0, JSON.stringify(dp));
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i] > nums[i - 1]) {
  //     dp[i] = dp[i - 1] + 1;
  //   }
  //   // console.log(i, JSON.stringify(dp));
  // }
  // return Math.max(...dp);

  // 动态规划：数组压缩
  // let preLength = 1;
  // let maxLength = 1;
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i] > nums[i - 1]) {
  //     preLength = preLength + 1;
  //   } else {
  //     preLength = 1;
  //   }
  //   maxLength = Math.max(maxLength, preLength);
  // }
  // return Math.max(maxLength);
};
// @lc code=end

// 3
console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
// 1
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
