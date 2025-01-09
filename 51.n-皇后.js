/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
const canAttach = (matrix, row, col) => {
  let i, j;
  j = 0;
  while (j < matrix[row].length) {
    if (matrix[row][j] === "Q") {
      return true;
    }
    j++;
  }
  i = 0;
  while (i < matrix.length) {
    if (matrix[i][col] === "Q") {
      return true;
    }
    i++;
  }
  i = row - 1;
  j = col - 1;
  while (i >= 0 && j >= 0) {
    if (matrix[i][j] === "Q") {
      return true;
    }
    i--;
    j--;
  }
  i = row - 1;
  j = col + 1;
  while (i >= 0 && j < matrix[i].length) {
    if (matrix[i][j] === "Q") {
      return true;
    }
    i--;
    j++;
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
  let matrix = Array.from({ length: n }, () => Array(n).fill("."));
  const backtracking = (row) => {
    if (path.length === matrix.length) {
      res.push([...path]);
      return;
    }
    for (let i = row; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] !== ".") {
          continue;
        }
        if (!canAttach(matrix, i, j)) {
          matrix[i][j] = "Q";
          path.push(matrix[i].join(""));
          backtracking(i + 1);
          matrix[i][j] = ".";
          path.pop();
        }
      }
    }
  };
  backtracking(0);
  return res;
};
// @lc code=end

console.log(JSON.stringify(solveNQueens(1)));
console.log(JSON.stringify(solveNQueens(4)));
console.log(JSON.stringify(solveNQueens(9)));
