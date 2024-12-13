/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let arr = s.split("");
  for (let i = 0; i < arr.length; i += 2 * k) {
    let l = i;
    let r = i + k - 1;
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  return arr.join("");
};
// @lc code=end

console.log(reverseStr("abcdefg", 2));
