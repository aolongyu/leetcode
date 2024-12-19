/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
const isOverMax = (s) => {
  const num = Number(s);
  if (num > 255) {
    return true;
  }
  return false;
};
const isEffNum = (s) => {
  if (s === "") {
    return false;
  }
  if (s.length > 1 && s[0] === "0") {
    return false;
  }
  const num = Number(s);
  if (num < 0 || isOverMax(num)) {
    return false;
  }
  return true;
};
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let res = [];
  let path = [];
  const backtracking = (s) => {
    if (path.length > 4) {
      return;
    }
    if (s.length === 0) {
      if (path.length === 4) {
        res.push(path.join("."));
      }
      return;
    }
    for (let i = 0; i < s.length; i++) {
      let curr = s.slice(0, i + 1);
      if (isEffNum(curr)) {
        path.push(curr);
        let next = s.slice(i + 1);
        backtracking(next);
        path.pop();
      }
      else if (isOverMax(curr)) {
        break;
      }
    }
  };
  backtracking(s);
  return res;
};
// @lc code=end

console.log(JSON.stringify(restoreIpAddresses("25525511135")));
console.log(JSON.stringify(restoreIpAddresses("0000")));
console.log(JSON.stringify(restoreIpAddresses("1111")));
console.log(JSON.stringify(restoreIpAddresses("010010")));
console.log(JSON.stringify(restoreIpAddresses("101023")));
