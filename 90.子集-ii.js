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
  const backtracking = (startIndex) => {
    res.push([...path]);
    if (startIndex === nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return res;
};
// @lc code=end

console.log(JSON.stringify(subsetsWithDup([1, 2, 2])));
