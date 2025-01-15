/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
const canAttach = (board, row, col) => {
  let i;
  let j;
  // 同行
  i = row;
  j = 0;
  while (j < board[i].length) {
    if (board[i][j] === "Q") {
      return true;
    }
    j++;
  }
  // 同列
  i = 0;
  j = col;
  while (i < board.length) {
    if (board[i][j] === "Q") {
      return true;
    }
    i++;
  }
  // 同斜线
  i = row - 1;
  j = col - 1;
  while (i >= 0 && j >= 0) {
    if (board[i][j] === "Q") {
      return true;
    }
    i--;
    j--;
  }
  i = row - 1;
  j = col + 1;
  while (i >= 0 && j < board[i].length) {
    if (board[i][j] === "Q") {
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
  // N皇后 同行、同列、同斜线 只能有一个
  let res = [];
  let path = [];
  let board = Array.from({ length: n }, () => Array(n).fill("."));
  const backtracking = (row) => {
    if (path.length === board.length) {
      res.push([...path]);
      return;
    }
    for (let i = row; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (!canAttach(board, i, j)) {
          board[i][j] = "Q";
          path.push(board[i].join(""));
          backtracking(i + 1);
          path.pop();
          board[i][j] = ".";
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
