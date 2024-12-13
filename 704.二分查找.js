/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length;
  res = -1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
      res = m;
      break;
    }
    if (nums[m] < target) {
      l = m + 1;
      continue;
    }
    r = m - 1;
  }
  return res;
};
// @lc code=end

console.log(search([5], 5));
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
