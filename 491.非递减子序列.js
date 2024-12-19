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
  const backtracking = (nums, preNum) => {
    if (path.length >= 2) {
      res.push([...path]);
    }
    let used = [];
    for (let i = 0; i < nums.length; i++) {
      if (preNum > nums[i]) {
        continue;
      }
      if (i > 0 && nums[i - 1] === nums[i]) {
        continue;
      }
      if (used[nums[i]]) {
        continue;
      }
      used[nums[i]] = true;
      path.push(nums[i]);
      backtracking(nums.slice(i + 1), nums[i]);
      path.pop();
    }
  };
  backtracking(nums, -Infinity);
  return res;
};
// @lc code=end

console.log(JSON.stringify(findSubsequences([4, 6, 7, 7])));
console.log(
  JSON.stringify(
    findSubsequences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1])
  )
);
