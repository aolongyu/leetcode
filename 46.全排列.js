/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let path = [];
  const backtracking = (nums) => {
    if (nums.length === 0) {
      res.push([...path]);
    }
    for (let i = 0; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking([...nums.slice(0, i), ...nums.slice(i + 1)]);
      path.pop();
    }
  };
  backtracking(nums);
  return res;
};
// @lc code=end

//
console.log(JSON.stringify(permute([1, 2, 3])));
