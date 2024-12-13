/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let arr = [1];

  for (let i = 1; i <= rowIndex; i++) {
    // 当前值只依赖j和j - 1，反着遍历，不会覆盖
    for (let j = arr.length - 1; j >= 1; j--) {
      arr[j] = arr[j] + arr[j - 1];
    }

    arr.push(1);
  }

  return arr;
};
// @lc code=end

console.log(JSON.stringify(getRow(5)));
