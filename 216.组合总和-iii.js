/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];
  let path = [];
  const backtracking = (k, n, start) => {
    if (n < 0) {
      return;
    }
    if (k === 0) {
      if (n === 0) {
        res.push([...path]);
      }
      return;
    }
    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtracking(k - 1, n - i, i + 1);
      path.pop();
    }
  };
  backtracking(k, n, 1);
  return res;
};
// @lc code=end

console.log(JSON.stringify(combinationSum3(3, 7)));
console.log(JSON.stringify(combinationSum3(3, 9)));
