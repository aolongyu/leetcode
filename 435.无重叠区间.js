/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  // console.log(intervals);
  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
    // 重叠
    if (intervals[i][0] < intervals[i - 1][1]) {
      count++;
      intervals[i][1] = Math.min(intervals[i][1], intervals[i - 1][1]);
    }
  }
  return count;
};
// @lc code=end
// [
//   [0, 2],
//   [1, 3],
//   [2, 4],
//   [3, 5],
//   [4, 6],
// ];

// 1
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
// 2
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);
