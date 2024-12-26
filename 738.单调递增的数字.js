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
  let nArr = String(n).split("").map(Number);
  let startFix = nArr.length;
  for (let i = nArr.length - 2; i >= 0; i--) {
    if (nArr[i] > nArr[i + 1]) {
      startFix = i + 1;
      nArr[i]--;
    }
  }
  while (startFix < nArr.length) {
    nArr[startFix] = 9;
    startFix++;
  }
  return Number(nArr.join(""));
};
// @lc code=end

console.log(monotoneIncreasingDigits(100));
console.log(monotoneIncreasingDigits(10));
console.log(monotoneIncreasingDigits(1234));
console.log(monotoneIncreasingDigits(332));
