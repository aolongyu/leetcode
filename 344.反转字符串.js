/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let head = 0;
  let tail = s.length - 1;
  while (head < tail) {
    [s[head], s[tail]] = [s[tail], s[head]];
    head++;
    tail--;
  }
  // return s;
};
// @lc code=end

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
