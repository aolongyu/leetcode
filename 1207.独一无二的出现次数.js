/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 0;
        }
        map[arr[i]]++;
    }
    let values = Object.values(map);
    let value2 = Array.from(new Set(values));
    return values.length === value2.length;
};
// @lc code=end

