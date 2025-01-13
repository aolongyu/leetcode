/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  let path = [];
  const backtracking = (k, start) => {
    if (k === 0) {
      res.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtracking(k - 1, i + 1);
      path.pop();
    }
  };
  backtracking(k, 1);
  return res;
};
// @lc code=end

console.log(JSON.stringify(combine(4, 2)));
