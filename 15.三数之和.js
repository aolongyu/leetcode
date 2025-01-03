/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
        continue;
      }
      if (sum > 0) {
        r--;
        continue;
      }
      res.push([nums[i], nums[l], nums[r]]);
      while (l < r && nums[l] === nums[l + 1]) {
        l++;
      }
      while (l < r && nums[r] === nums[r - 1]) {
        r--;
      }
      l++;
      r--;
    }
    while (i < nums.length - 2 && nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return res;
};
// @lc code=end

console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])));
console.log(JSON.stringify(threeSum([0, 1, 1])));
console.log(JSON.stringify(threeSum([0, 0, 0])));
