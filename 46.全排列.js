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
  let usedIndex = [];
  const backTracking = () => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (usedIndex[i]) {
        continue;
      }
      usedIndex[i] = true;
      path.push(nums[i]);
      backTracking();
      path.pop();
      usedIndex[i] = false;
    }
  };
  backTracking();
  return res;
};
// @lc code=end

//
console.log(JSON.stringify(permute([1, 2, 3])));
