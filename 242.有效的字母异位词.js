/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      return false;
    } else {
      map[t[i]]--;
    }
  }
  return true;
};
// @lc code=end

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
