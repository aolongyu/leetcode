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
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
        continue;
      }
      if (sum > 0) {
        k--;
        continue;
      }
      res.push([nums[i], nums[j], nums[k]]);
      while (j < k && nums[j] === nums[j + 1]) {
        j++;
      }
      while (j < k && nums[k] === nums[k - 1]) {
        k--;
      }
      j++;
      k--;
    }
  }
  return res;
};
// @lc code=end

console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])));
console.log(JSON.stringify(threeSum([0, 1, 1])));
console.log(JSON.stringify(threeSum([0, 0, 0])));
