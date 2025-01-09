/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  let path = [];
  let backtracking = (nums) => {
    if (nums.length === 0) {
      res.push([...path]);
      return;
    }
    let layerUsedNum = {};
    for (let i = 0; i < nums.length; i++) {
      if (layerUsedNum[nums[i]]) {
        continue;
      }
      layerUsedNum[nums[i]] = true;
      path.push(nums[i]);
      backtracking([...nums.slice(0, i), ...nums.slice(i + 1)]);
      path.pop();
    }
  };
  backtracking(nums);
  return res;
};
// @lc code=end

console.log(JSON.stringify(permuteUnique([1, 1, 2])));
console.log(JSON.stringify(permuteUnique([1, 2, 3])));
