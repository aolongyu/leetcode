/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  /**
   * 动态规划
   * dp[i][k] 第i个数字时k方向摆动，最多有dp[i][k]个摆动序列
   * 状态转移方程
   *         nums[i] > nums[i - 1]
   *         ? dp[i] = dp[i - 1][0] + 1
   *         : nums[i] < nums[i - 1]
   *           ? dp[i] = dp[i - 1][1] = 1
   *           : dp[i] = dp[i - 1]
   * 初始化 dp[0][0] = 1, dp[0][1] = 1
   * 数据模拟 [1,7,4,9,2,5]
   *           - 0 1
   *         - 1 1 1
   *         - 7 1 2
   *         - 4 3 1
   *         - 9 1 4
   *         - 2 5 1
   *         - 5 1 6
   *
   */
  // let up = 1;
  // let down = 1;
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i] > nums[i - 1]) {
  //     up = Math.max(up, down + 1);
  //   }
  //   if (nums[i] < nums[i - 1]) {
  //     down = Math.max(down, up + 1);
  //   }
  // }
  // return Math.max(up, down);

  if (nums.length <= 1) {
    return nums.length;
  }
  let res = 1;
  let preDiff = 0;
  for (let i = 1; i < nums.length; i++) {
    let curDiff = nums[i] - nums[i - 1];
    if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
      res++;
      preDiff = curDiff;
    }
  }
  return res;
};
// @lc code=end

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]));
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]));
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]));
