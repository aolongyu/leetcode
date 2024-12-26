/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  let res = [];
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];
    // 接壤or重叠
    if (curr[0] <= prev[1]) {
      prev[0] = Math.min(prev[0], curr[0]);
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      res.push(prev);
      prev = curr;
    }
  }
  res.push(prev);
  return res;
};
// @lc code=end

console.log(
  JSON.stringify(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  )
);

console.log(
  JSON.stringify(
    merge([
      [1, 4],
      [4, 5],
    ])
  )
);
