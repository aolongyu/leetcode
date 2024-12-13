/*
 * @lc app=leetcode.cn id=1657 lang=javascript
 *
 * [1657] 确定两个字符串是否接近
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    // 长度不同，false
    if (word1.length !== word2.length) {
        return false;
    }

    let map1 = {};
    let map2 = {};
    let len = word1.length;

    for (let i = 0; i < len; i++) {
        const str1 = word1[i];
        if (!map1[str1]) {
            map1[str1] = 0;
        }
        map1[str1]++;

        const str2 = word2[i];
        if (!map2[str2]) {
            map2[str2] = 0;
        }
        map2[str2]++;
    }

    // 所有字符类型没有一一对应，false
    const str1 = Object.keys(map1).sort().join('');
    const str2 = Object.keys(map2).sort().join('');
    if (str1 !== str2) {
        return false;
    }

    // 出现的次数排序没有一一对应，false
    const count1 = Object.values(map1).sort().join('');
    const count2 = Object.values(map2).sort().join('');
    if (count1 !== count2) {
        return false;
    }

    return true;
};
// @lc code=end

console.log(closeStrings('cabbba', 'aabbss'))