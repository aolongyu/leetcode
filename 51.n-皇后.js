/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
const canAttach = (matrix, row, col) => {
  let i;
  let j;
  // 同行
  for (i = row, j = 0; j < matrix[i].length; j++) {
    if (j !== col && matrix[i][j] === "Q") {
      return true;
    }
  }
  // 同列
  for (i = 0, j = col; i < matrix.length; i++) {
    if (i !== row && matrix[i][j] === "Q") {
      return true;
    }
  }
  // 同斜线（只关注row、col的左上角和右上角，因为左下角、右下角一定都为.）
  for (i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (matrix[i][j] === "Q") {
      return true;
    }
  }
  for (i = row - 1, j = col + 1; i >= 0 && j < matrix[i].length; i--, j++) {
    if (matrix[i][j] === "Q") {
      return true;
    }
  }
  return false;
};
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [];
  let path = [];
  let matrix = Array.from({ length: n }).map(() => Array(n).fill("."));
  const backtracking = (matrix, row) => {
    if (path.length === matrix.length) {
      res.push([...path]);
      return;
    }
    for (let i = row; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = "Q";
        if (!canAttach(matrix, i, j)) {
          path.push(matrix[i].join(""));
          backtracking(matrix, i + 1);
          path.pop();
        }
        matrix[i][j] = ".";
      }
    }
  };
  backtracking(matrix, 0);
  return res;
};
// @lc code=end

console.log(JSON.stringify(solveNQueens(1)));
console.log(JSON.stringify(solveNQueens(4)));
console.log(JSON.stringify(solveNQueens(9)));
