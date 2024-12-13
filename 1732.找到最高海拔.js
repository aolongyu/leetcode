/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let curGain = 0;
    let ans = 0;
    for (let i = 0 ; i < gain.length; i++) {
        curGain += gain[i];
        ans = Math.max(ans, curGain);
    }
    return ans;
};
// @lc code=end

