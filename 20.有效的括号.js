/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let targetMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (targetMap[s[i]]) {
      stack.push(targetMap[s[i]]);
      continue;
    }
    let top = stack.pop();
    if (top !== s[i]) {
      return false;
    }
  }
  return stack.length === 0;
};
// @lc code=end

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
