/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  /**
   * 动态规划
   * dp[j] 0～j - 1的nums中存在的最长递增子序列长度为dp[j]
   * 状态转移方程
   *         nums[i] > nums[j]
   *         ? Math.max(dp[i], dp[j] + 1)
   *         : null
   * 初始化 all 1
   * 遍历顺序 i:1~nums.length-1 j:j-1~0
   * 数据模拟 [1, 3, 6, 7, 9, 4, 10, 5, 6]
   *         1 3 6 7 9 4 10 5 6
   *         1 2 3 4 5 3 6  4 5
   */

  let dp = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  // debug
  // console.log(JSON.stringify(dp));
  return Math.max(...dp);
};
// @lc code=end

// 6
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));
// 4
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
// 1
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
