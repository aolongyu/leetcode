/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  /**
   * 动态规划
   * dp[i][j] nums中0～i的数字的最大和
   * 状态转移方程
   *         nums[i] < j
   *         ? dp[i][j] = nums[i] + dp[i - 1][j - nums[i]]
   *         : dp[i][j] = dp[i - 1][j]
   * 初始化 all 0 & dp[0][j] = j < nums[0] ? 0 : nums[0]
   * 遍历顺序 i:1~length - 1 j:1~bagweight
   * 数据模拟 [1, 5, 11, 5]
   *           -  0 1 2 3 4 5 6 7 8 9 10 11
   *         - 1  0 1 1 1 1 1 1 1 1 1 1  1
   *         - 5  0 1 1 1 1 5 6 6 6 6 6  6
   *         - 11 0 1 1 1 1 5 6 6 6 6 6  11
   *         - 5  0 1 1 1 1 5 6 6 6 6 10 11
   */

  // 版本一：二维数组
  // let sum = nums.reduce((a, b) => a + b, 0);
  // let bagweight = sum / 2;
  // if (Math.floor(bagweight) !== bagweight) {
  //   return false;
  // }
  // let dp = Array.from({ length: nums.length }, () =>
  //   Array(bagweight + 1).fill(0)
  // );
  // for (let j = nums[0]; j <= bagweight; j++) {
  //   dp[0][j] = nums[0];
  // }
  // // debug
  // // console.log(0, JSON.stringify(dp[0]));
  // for (let i = 1; i < nums.length; i++) {
  //   for (let j = 1; j <= bagweight; j++) {
  //     if (j < nums[i]) {
  //       dp[i][j] = dp[i - 1][j];
  //     } else {
  //       let r = j - nums[i];
  //       dp[i][j] = Math.max(dp[i - 1][j], nums[i] + dp[i - 1][r]);
  //     }
  //   }
  //   // debug
  //   // console.log(i, JSON.stringify(dp[i]));
  //   if (dp[i][bagweight] === bagweight) {
  //     return true;
  //   }
  // }
  // return false;

  // 版本二：数组压缩 一维数组
  let sum = nums.reduce((a, b) => a + b, 0);
  let bagweight = sum / 2;
  if (Math.floor(bagweight) !== bagweight) {
    return false;
  }
  let dp = Array(bagweight + 1).fill(0);
  for (let j = nums[0]; j <= bagweight; j++) {
    dp[j] = nums[0];
  }
  // debug
  // console.log(0, JSON.stringify(dp));
  for (let i = 1; i < nums.length; i++) {
    for (let j = bagweight; j >= 1; j--) {
      if (j < nums[i]) {
        break;
      }
      let r = j - nums[i];
      dp[j] = Math.max(dp[j], nums[i] + dp[r]);
    }
    // debug
    // console.log(i, JSON.stringify(dp));
    if (dp[bagweight] === bagweight) {
      return true;
    }
  }
  return false;
};
// @lc code=end

// true
console.log(canPartition([3, 3, 3, 4, 5]));
// true
console.log(canPartition([1, 5, 11, 5]));
// false
console.log(canPartition([1, 1, 1, 5]));
