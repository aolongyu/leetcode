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
  let slow = 0;
  let fast = 0;
  while (s[slow] === " ") {
    slow++;
    fast++;
  }
  while (fast < s.length) {
    if (s[fast] === " ") {
      arr.push(s.slice(slow, fast));
      while (s[fast] === " ") {
        fast++;
      }
      slow = fast;
    }
    fast++;
  }
  return arr.reverse().join(" ");
};
// @lc code=end

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
