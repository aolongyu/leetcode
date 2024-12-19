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
  let usedIndex = {};
  const backtracking = (nums) => {
    if (nums.length === path.length) {
      res.push([...path]);
      return;
    }
    let layerUsed = {};
    for (let i = 0; i < nums.length; i++) {
      if (usedIndex[i] || layerUsed[nums[i]]) {
        continue;
      }
      layerUsed[nums[i]] = true;
      usedIndex[i] = true;
      path.push(nums[i]);
      backtracking(nums);
      path.pop();
      usedIndex[i] = false;
    }
  };
  backtracking(nums);
  return res;
};
// @lc code=end

console.log(JSON.stringify(permuteUnique([1, 1, 2])));
console.log(JSON.stringify(permuteUnique([1, 2, 3])));
