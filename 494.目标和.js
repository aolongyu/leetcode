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
  /**
   * 动态规划
   * dp[i] 0~i中添加符号后和为target的情况有dp[i]种
   * 状态转移方程
   *         dp[i] += dp[i - nums[i]]
   * 初始化 all 0 & dp[0] = 1
   * 遍历顺序 i:0~nums.length-1 j:bagweight~0
   * 数据模拟 [1, 1, 1, 1, 1], 3
   *           - 0 1 2 3 4
   *         - 1 1 1 0 0 0
   *         - 1 1 2 1 0 0
   *         - 1 1 3 3 1 0
   *         - 1 1 4 6 4 1
   *         - 1 1 5 10 10 5
   */
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum < Math.abs(target)) {
    return 0;
  }
  let bagweight = (sum + target) / 2;
  if (Math.floor(bagweight) !== bagweight) {
    return 0;
  }
  let dp = Array(bagweight + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = bagweight; j >= 0; j--) {
      if (j < nums[i]) {
        break;
      }
      dp[j] += dp[j - nums[i]];
    }
    // debug
    // console.log(i, JSON.stringify(dp));
  }
  return dp.pop();
};
// @lc code=end

console.log(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1));
// 1
console.log(findTargetSumWays([1], 1));
// 5
console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
