/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let res = 0;
  let gi = 0;
  let si = 0;
  while (gi <= g.length && si <= s.length) {
    if (g[gi] <= s[si]) {
      res++;
      gi++;
    }
    si++;
  }
  return res;
};
// @lc code=end

console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));
