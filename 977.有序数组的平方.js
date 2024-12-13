/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let res = [];
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let ls = nums[left] * nums[left];
    let rs = nums[right] * nums[right];
    if (ls < rs) {
      res.unshift(rs);
      right--;
    } else if (ls > rs) {
      res.unshift(ls);
      left++;
    } else {
      res.unshift(ls, rs);
      left++;
      right--;
    }
  }
  if (left === right) {
    res.unshift(nums[left] * nums[left]);
  }
  return res;
};
// @lc code=end

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
