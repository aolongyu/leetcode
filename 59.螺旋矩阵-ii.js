/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let res = Array.from({ length: n }, () => Array(n).fill(0));
  let i = 0;
  let j = 0;
  let count = 1;

  // 0-up 1-right 2-down 3-left
  let direction = 1;

  let used = (i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= n) {
      return true;
    }
    return res[i][j] !== 0;
  };

  while (count <= n * n) {
    res[i][j] = count++;
    switch (direction) {
      case 0:
        if (used(i - 1, j)) {
          direction = 1;
          j++;
        } else {
          i--;
        }
        break;
      case 1:
        if (used(i, j + 1)) {
          direction = 2;
          i++;
        } else {
          j++;
        }
        break;
      case 2:
        if (used(i + 1, j)) {
          direction = 3;
          j--;
        } else {
          i++;
        }
        break;
      case 3:
        if (used(i, j - 1)) {
          direction = 0;
          i--;
        } else {
          j--;
        }
        break;
      default:
        break;
    }
  }
  return res;
};
// @lc code=end

generateMatrix(10).forEach((row) => {
  console.log(JSON.stringify(row));
});
