/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  let res = 1;
  let prev = 0;
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];
    if ((diff > 0 && prev <= 0) || (diff < 0 && prev >= 0)) {
      res++;
      prev = diff;
    }
  }
  return res;
};
// @lc code=end

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]));
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]));
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]));
