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
  const backtracking = () => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    let layerUsedNum = {};
    for (let i = 0; i < nums.length; i++) {
      if (usedIndex[i] || layerUsedNum[nums[i]]) {
        continue;
      }
      layerUsedNum[nums[i]] = true;
      path.push(nums[i]);
      usedIndex[i] = true;
      backtracking();
      usedIndex[i] = false;
      path.pop();
    }
  };
  backtracking();
  return res;
};
// @lc code=end

console.log(JSON.stringify(permuteUnique([1, 1, 2])));
console.log(JSON.stringify(permuteUnique([1, 2, 3])));
