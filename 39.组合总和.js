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
      path.push(candidates[i]);
      backtracking(candidates, target, sum + candidates[i], i);
      path.pop();
    }
  };
  backtracking(candidates, target, 0, 0);
  return res;
};
// @lc code=end

console.log(JSON.stringify(combinationSum([2, 3, 6, 7], 7)));
console.log(JSON.stringify(combinationSum([2, 3, 5], 8)));
