/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];
  let path = [];
  const backtracking = (nums) => {
    res.push([...path]);
    if (nums.length === 0) {
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      path.push(nums[i]);
      let next = nums.slice(i + 1);
      backtracking(next);
      path.pop();
    }
  };
  backtracking(nums);
  return res;
};
// @lc code=end

console.log(JSON.stringify(subsets([1, 2, 3])));
