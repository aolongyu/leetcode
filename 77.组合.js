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
  const backtracking = (n, k, startIndex) => {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i <= n; i++) {
      // 剪枝
      if (k - path.length > n - i + 1) {
        return;
      }
      path.push(i);
      backtracking(n, k, i + 1);
      path.pop();
    }
  };
  backtracking(n, k, 1);
  return res;
};
// @lc code=end

console.log(JSON.stringify(combine(4, 2)));
