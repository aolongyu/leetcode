/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
const isValid = (board, row, col, val) => {
  // 同行不能相同数字
  for (let j = 0; j < board[row].length; j++) {
    if (board[row][j] === val) {
      return false;
    }
  }
  // 同列不能相同数字
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === val) {
      return false;
    }
  }
  // 同块不能相同数字
  let startRowIndex = Math.floor(row / 3) * 3;
  let startColIndex = Math.floor(col / 3) * 3;
  for (let i = startRowIndex; i < startRowIndex + 3; i++) {
    for (let j = startColIndex; j < startColIndex + 3; j++) {
      if (board[i][j] === val) {
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
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
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
