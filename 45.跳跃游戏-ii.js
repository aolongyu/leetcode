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
    if (i === curIndex) {
      step++;
      curIndex = farIndex;
    }
  }
  return step;
};
// @lc code=end

// 2
// length: 15
//  7  1  11 9 13 11  7_14 17  9 11 13 21 13 17
//  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14
console.log(jump([7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3]));
console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([1, 2]));
