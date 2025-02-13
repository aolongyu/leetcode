/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
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
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      path.push(candidates[i]);
      backTracking(i + 1, target - candidates[i]);
      path.pop();
    }
  };
  backTracking(0, target);
  return res;
};
// @lc code=end

console.log(JSON.stringify(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)));
console.log(JSON.stringify(combinationSum2([2, 5, 2, 1, 2], 5)));
