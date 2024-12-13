/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = {};
  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]]) {
      map[magazine[i]]++;
    } else {
      map[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!map[ransomNote[i]]) {
      return false;
    }
    map[ransomNote[i]]--;
  }
  return true;
};
// @lc code=end

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
