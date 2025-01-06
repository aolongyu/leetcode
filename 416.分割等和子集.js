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
  // 核心思想，数字分为两个部分，两个部分和相等
  let sum = nums.reduce((a, b) => a + b, 0);
  let bagweight = sum / 2;
  if (Math.floor(bagweight) !== bagweight) {
    return false;
  }
  let dp = Array(bagweight + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    for (let j = bagweight; j >= 0; j--) {
      if (j < num) {
        break;
      }
      dp[j] = Math.max(dp[j], dp[j - num] + num);
    }
  }
  return dp[bagweight] === bagweight;
};
// @lc code=end

// true
console.log(canPartition([3, 3, 3, 4, 5]));
// true
console.log(canPartition([1, 5, 11, 5]));
// false
console.log(canPartition([1, 1, 1, 5]));
