/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
const isValid = (str) => {
  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  let path = [];
  const backtracking = (startIndex) => {
    if (startIndex === s.length) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      let str = s.slice(startIndex, i + 1);
      if (isValid(str)) {
        path.push(str);
        backtracking(i + 1);
        path.pop();
      }
    }
  };
  backtracking(0);
  return res;
};
// @lc code=end

console.log(JSON.stringify(partition("aab")));
