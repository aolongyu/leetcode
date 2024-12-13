/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let rArr = [];
    let dArr = [];

    let len = senate.length;

    for (let i = 0; i < len; i++) {
        if (senate[i] === 'R') {
            rArr.push(i);
        } else {
            dArr.push(i);
        }
    }

    while (rArr.length && dArr.length) {
        let rI = rArr.shift();
        let dI = dArr.shift();
        if (rI < dI) {
            rArr.push(rI + len);
        } else {
            dArr.push(dI + len);
        }
    }

    return rArr.length ? 'Radiant' : 'Dire';
};
// @lc code=end

console.log(predictPartyVictory('RD'));