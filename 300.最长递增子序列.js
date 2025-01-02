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
  let dp = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
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
