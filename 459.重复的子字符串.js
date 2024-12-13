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
  const getNext = (str) => {
    let next = [];
    let j = 0;
    next.push(j);
    for (let i = 1; i < str.length; i++) {
      while (j > 0 && str[i] !== str[j]) {
        j = next[j - 1];
      }
      if (str[i] === str[j]) {
        j++;
      }
      next.push(j);
    }
    return next;
  };

  let next = getNext(s);
  console.log(next)
  if (
    next[next.length - 1] !== 0 &&
    s.length % (s.length - next[next.length - 1]) === 0
  ) {
    return true;
  }
  return false;
};
// @lc code=end

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abcabcabcabc"));
