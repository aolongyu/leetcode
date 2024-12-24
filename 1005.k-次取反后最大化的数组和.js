/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
    }
    sum += nums[i];
  }
  if (k % 2 !== 0) {
    sum += -2 * nums[nums.length - 1];
  }
  return sum;
};
// @lc code=end

console.log(largestSumAfterKNegations([-2, 9, 9, 8, 4], 5));
console.log(largestSumAfterKNegations([4, 2, 3], 1));
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3));
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2));
