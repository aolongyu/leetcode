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
  let ans = [];
  let path = [];
  let backtracking = (used) => {
    if (path.length === nums.length) {
      ans.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      backtracking(used);
      used[i] = false;
      path.pop();
    }
  };
  backtracking([]);
  return ans;
};
// @lc code=end

//
console.log(JSON.stringify(permute([1, 2, 3])));
