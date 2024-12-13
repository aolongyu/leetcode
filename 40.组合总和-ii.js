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
  const backtracking = (candidates, target, sum, startIndex) => {
    // 剪枝
    if (sum > target) {
      return;
    }
    if (sum === target) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }
      path.push(candidates[i]);
      backtracking(candidates, target, sum + candidates[i], i + 1);
      path.pop();
    }
  };
  backtracking(candidates, target, 0, 0);
  return res;
};
// @lc code=end

console.log(JSON.stringify(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)));
console.log(JSON.stringify(combinationSum2([2, 5, 2, 1, 2], 5)));
