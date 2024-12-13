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
      let l = j + 1;
      let r = nums.length - 1;
      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum < target) {
          l++;
          continue;
        }
        if (sum > target) {
          r--;
          continue;
        }
        res.push([nums[i], nums[j], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }
  return res;
};
// @lc code=end

console.log(JSON.stringify(fourSum([1, 0, -1, 0, -2, 2], 0)));
console.log(JSON.stringify(fourSum([2, 2, 2, 2, 2], 8)));
//[[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(JSON.stringify(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0)));
