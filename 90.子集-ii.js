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
  const backTracking = (start) => {
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      backTracking(i + 1);
      path.pop();
    }
  };
  backTracking(0);
  return res;
};
// @lc code=end

console.log(JSON.stringify(subsetsWithDup([1, 2, 2])));
