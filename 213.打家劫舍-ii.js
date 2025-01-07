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
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  const _rob = (nums) => {
    let handle = [nums[0], 0];
    for (let i = 1; i < nums.length; i++) {
      handle = [nums[i] + handle[1], Math.max(...handle)];
    }
    return Math.max(...handle);
  };
  return Math.max(
    _rob(nums.slice(0, nums.length - 1)),
    _rob(nums.slice(1, nums.length))
  );
};

// @lc code=end

// 3
console.log(rob([2, 3, 2]));
// 4
console.log(rob([1, 2, 3, 1]));
// 0
console.log(rob([0]));
