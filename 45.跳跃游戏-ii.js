/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let step = 0;
  let curIndex = 0;
  let farIndex = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farIndex = Math.max(farIndex, nums[i] + i);
    if (curIndex === i) {
      step++;
      curIndex = farIndex;
    }
  }
  return step;
};
// @lc code=end

// 2
console.log(jump([7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3]));
console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([1, 2]));
