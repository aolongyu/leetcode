/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  let arr = `${n}`.split("").map(Number);
  let len = arr.length;
  let startNine = len;
  for (let i = len - 1; i > 0; i--) {
    if (arr[i] < arr[i - 1]) {
      startNine = i;
      arr[i - 1]--;
    }
  }
  for (let i = startNine; i < len; i++) {
    arr[i] = 9;
  }
  return Number(arr.join(""));
};
// @lc code=end

console.log(monotoneIncreasingDigits(100));
console.log(monotoneIncreasingDigits(10));
console.log(monotoneIncreasingDigits(1234));
console.log(monotoneIncreasingDigits(332));
