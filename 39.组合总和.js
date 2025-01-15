/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  let path = [];
  const backTracking = (start, target) => {
    if (target <= 0) {
      if (target === 0) {
        res.push([...path]);
      }
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backTracking(i, target - candidates[i]);
      path.pop();
    }
  };
  backTracking(0, target);
  return res;
};
// @lc code=end

console.log(JSON.stringify(combinationSum([2, 3, 6, 7], 7)));
console.log(JSON.stringify(combinationSum([2, 3, 5], 8)));
