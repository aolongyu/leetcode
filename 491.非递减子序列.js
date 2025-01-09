/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 非递减子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let res = [];
  let path = [];
  const backtracking = (nums, startIndex, prevValue) => {
    if (path.length >= 2) {
      res.push([...path]);
    }
    let layerUsed = {};
    for (let i = startIndex; i < nums.length; i++) {
      if (nums[i] < prevValue || layerUsed[nums[i]]) {
        continue;
      }
      layerUsed[nums[i]] = true;
      path.push(nums[i]);
      backtracking(nums, i + 1, nums[i]);
      path.pop();
    }
  };
  backtracking(nums, 0, -Infinity);
  return res;
};
// @lc code=end

console.log(JSON.stringify(findSubsequences([4, 6, 7, 7])));
console.log(
  JSON.stringify(
    findSubsequences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1])
  )
);
