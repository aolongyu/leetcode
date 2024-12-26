/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  // console.log(JSON.stringify(points));
  let arrow = 1;
  let prevEnd = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > prevEnd) {
      arrow++;
      prevEnd = points[i][1];
    }
  }
  return arrow;
};
// @lc code=end

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
);
