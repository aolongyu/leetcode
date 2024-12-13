/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length <= 2) {
    return Math.max(nums[0] || 0, nums[1] || 0);
  }

  return Math.max(
    robRange(nums.slice(0, nums.length - 1)),
    robRange(nums.slice(1, nums.length))
  );
};

const robRange = (nums) => {
  if (nums.length <= 2) {
    return Math.max(nums[0], nums[1] || 0);
  }

  let a = nums[0];
  let b = Math.max(nums[0], nums[1] || 0);

  for (let i = 2; i < nums.length; i++) {
    [a, b] = [b, Math.max(b, a + nums[i])];
  }

  return b;
};

// @lc code=end

// 3
console.log(rob([2, 3, 2]));
// 4
console.log(rob([1, 2, 3, 1]));
// 0
console.log(rob([0]));
