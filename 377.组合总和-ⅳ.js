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
  // 背包 target
  // 物品 nums 可重复使用
  // 在乎顺序 排列
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let j = 1; j <= target; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (j < nums[i]) {
        continue;
      }
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[target];
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
