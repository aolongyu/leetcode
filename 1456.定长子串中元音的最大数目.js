/*
 * @lc app=leetcode.cn id=1456 lang=javascript
 *
 * [1456] 定长子串中元音的最大数目
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const VOWEL = ['a', 'e', 'i', 'o', 'u'];
var isVowel = function(s) {
    return VOWEL.includes(s);
}

var maxVowels = function(s, k) {
    let start = 0;
    let end = k;

    let curCount = 0;

    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            curCount++;
        }
    }

    let maxCount = curCount;

    while (end <= s.length - 1) {
        curCount = curCount - (isVowel(s[start]) ? 1 : 0) + (isVowel(s[end]) ? 1 : 0);
        maxCount = Math.max(maxCount, curCount);

        start++;
        end++;
    }

    return maxCount;
};
// @lc code=end

