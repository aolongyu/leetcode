/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let part = 0;
    let visited = new Set();
    let cities = isConnected.length;

    for (let i = 0; i < cities; i++) {
        if (!visited.has(i)) {
            part++;
            pollute(i, isConnected, visited, cities);
        }
    }

    return part;
};

var pollute = (i, isConnected, visited, cities) => {
    for (let j = 0; j < cities; j++) {
        if (isConnected[i][j] === 1 && !visited.has(j)) {
            visited.add(j);
            pollute(j, isConnected, visited, cities);
        }
    }
}

// @lc code=end

