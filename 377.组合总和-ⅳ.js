/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  /**
   * 动态规划
   * dp[j] 0~i的nums任选 和为j的情况有dp[j]种
   * 状态转移方程
   *         j < nums[i]
   *         ? dp[j]
   *         : dp[j] + dp[j - nums[i]]
   * 初始化 all 0 & dp[0] = 1
   * 遍历顺序 j:0~target i:0~nums.length-1
   * 数据模拟 [1, 2, 3], 4
   *           - 0 1 2 3 4
   *         - 1 1 1 1 2 4
   *         - 2     2 3 6
   *         - 3       4 7
   */

  let dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let j = 0; j <= target; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (j < nums[i]) {
        continue;
      }
      let r = j - nums[i];
      dp[j] += dp[r];
    }
  }
  // debug
  // console.log(JSON.stringify(dp));
  return dp.pop();
};
// @lc code=end

console.log(
  combinationSum4(
    [
      3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 25,
    ],
    10
  )
);

console.log(combinationSum4([1, 2, 3], 4));
