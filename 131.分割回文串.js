/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
const isPalindrome = (s) => {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
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
  const backtracking = (s) => {
    if (s.length === 0) {
      res.push([...path]);
    }
    for (let i = 0; i < s.length; i++) {
      let curr = s.slice(0, i + 1);
      if (isPalindrome(curr)) {
        path.push(curr);
        let next = s.slice(i + 1);
        backtracking(next);
        path.pop();
      }
    }
  };
  backtracking(s);
  return res;
};
// @lc code=end

console.log(JSON.stringify(partition("aab")));
