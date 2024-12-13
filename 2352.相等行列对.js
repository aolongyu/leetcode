/*
 * @lc app=leetcode.cn id=2352 lang=javascript
 *
 * [2352] 相等行列对
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rowArr = [];
    const colArr = [];

    for (let i = 0; i < grid.length; i++) {
        rowArr[i] = '';
        for (let j = 0; j < grid[i].length; j++) {
            rowArr[i] += '-' + grid[i][j];
            if (!colArr[j]) {
                colArr[j] = '';
            }
            colArr[j] += '-' + grid[i][j];
        }
    }

    let ans = 0;

    for (let i = 0; i < rowArr.length; i++) {
        const filters = colArr.filter(col => rowArr[i] === col);
        ans += filters.length;
    }

    return ans;
};
// @lc code=end

console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]))