/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let next = [];
  let j = 0;
  next.push(j);
  let len = s.length;
  for (let i = 1; i < len; i++) {
    while (j > 0 && s[i] !== s[j]) {
      j = next[j - 1];
    }
    if (s[i] === s[j]) {
      j++;
    }
    next.push(j);
  }

  let tail = next[len - 1];
  return tail !== 0 && tail % (len - tail) === 0;
};
// @lc code=end

console.log(repeatedSubstringPattern("a"));
console.log(repeatedSubstringPattern("abac"));
console.log(repeatedSubstringPattern("abcabcabcabc"));
