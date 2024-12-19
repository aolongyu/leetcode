/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  let path = [];
  const backtracking = (nums) => {
    res.push([...path]);
    if (nums.length === 0) {
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i - 1] === nums[i]) {
        continue;
      }
      path.push(nums[i]);
      backtracking(nums.slice(i + 1));
      path.pop();
    }
  };
  backtracking(nums);
  return res;
};
// @lc code=end

console.log(JSON.stringify(subsetsWithDup([1, 2, 2])));
