/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  // x - (sum - x) = target
  // x = (sum + target) / 2
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum < Math.abs(target)) {
    return 0;
  }
  let bagweight = (sum + target) / 2;
  if (bagweight !== Math.floor(bagweight)) {
    return 0;
  }
  let dp = Array(bagweight + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = bagweight; j >= 0; j--) {
      if (j < nums[i]) {
        continue;
      }
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[bagweight];
};
// @lc code=end

console.log(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1));
// 1
console.log(findTargetSumWays([1], 1));
// 5
console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
