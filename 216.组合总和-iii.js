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
  const backtracking = (k, n, startIndex, sum) => {
    if (path.length === k) {
      if (sum === n) {
        res.push([...path]);
      }
      return;
    }
    for (let i = startIndex; i <= 9; i++) {
      // 减枝
      if (k - path.length > n - i + 1 || sum + i > n) {
        return;
      }
      path.push(i);
      backtracking(k, n, i + 1, sum + i);
      path.pop();
    }
  };
  backtracking(k, n, 1, 0);
  return res;
};
// @lc code=end
