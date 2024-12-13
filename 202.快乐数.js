/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sum = n;
  let set = new Set([sum]);
  while (true) {
    let str = sum.toString();
    sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str[i] * str[i];
    }
    if (sum === 1) {
      return true;
    }
    if (set.has(sum)) {
      return false;
    }
    set.add(sum);
  }
};
// @lc code=end

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
