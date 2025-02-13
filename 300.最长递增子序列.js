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
  // Updated: 2025/02/13 13:45:00
  let n = nums.length;
  let dp = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    let j = i - 1;
    while (j >= 0) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
      j--;
    }
  }
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
