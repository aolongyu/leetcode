/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
const isValid = (str) => {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
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
  const backTracking = (start) => {
    if (start === s.length) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < s.length; i++) {
      let str = s.slice(start, i + 1);
      if (!isValid(str)) {
        continue;
      }
      path.push(str);
      backTracking(i + 1);
      path.pop();
    }
  };
  backTracking(0);
  return res;
};
// @lc code=end

console.log(JSON.stringify(partition("aab")));
