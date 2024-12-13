/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s += " ";
  let arr = [];
  let l = 0;
  let r = 0;
  while (s[l] === " ") {
    l++;
    r++;
  }

  while (r < s.length) {
    if (s[r] === " ") {
      arr.unshift(s.slice(l, r));
      while (s[r] === " ") {
        r++;
      }
      l = r;
    }
    r++;
  }
  return arr.join(" ");
};
// @lc code=end

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
