/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
const isValid = (board, row, col, target) => {
  // 同行
  for (let j = 0; j < 9; j++) {
    if (board[row][j] === target) {
      return false;
    }
  }
  // 同列
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === target) {
      return false;
    }
  }
  // 同九宫格
  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === target) {
        return false;
      }
    }
  }
  return true;
};
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const backtracking = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== ".") {
          continue;
        }
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, i, j, `${num}`)) {
            board[i][j] = `${num}`;
            if (backtracking()) {
              return true;
            }
            board[i][j] = ".";
          }
        }
        return false;
      }
    }
    return true;
  };
  backtracking();
  return board;
};
// @lc code=end

// [
//   ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
//   ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
//   ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
//   ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
//   ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
//   ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
//   ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
//   ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
//   ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
// ];
console.log(
  JSON.stringify(
    solveSudoku([
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
  )
);
