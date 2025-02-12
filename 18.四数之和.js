/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let k = j + 1;
      let l = nums.length - 1;
      while (k < l) {
        let sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else {
          res.push([nums[i], nums[j], nums[k], nums[l]]);
          while (k < l && nums[k] === nums[k + 1]) {
            k++;
          }
          while (k < l && nums[l] === nums[l - 1]) {
            l--;
          }
          k++;
          l--;
        }
      }
    }
  }
  return res;
};
// @lc code=end

console.log(JSON.stringify(fourSum([1, 0, -1, 0, -2, 2], 0)));
console.log(JSON.stringify(fourSum([2, 2, 2, 2, 2], 8)));
console.log(JSON.stringify(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0)));
