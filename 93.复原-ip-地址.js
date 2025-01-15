/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
const isValid = (str) => {
  if (str === "0") {
    return true;
  }
  if (str[0] === "0") {
    return false;
  }
  let num = parseInt(str);
  if (num < 0 || num > 255) {
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
  const backTracking = (start) => {
    if (path.length === 4 || start === s.length) {
      if (path.length === 4 && start === s.length) {
        res.push(path.join("."));
      }
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

console.log(JSON.stringify(restoreIpAddresses("25525511135")));
console.log(JSON.stringify(restoreIpAddresses("0000")));
console.log(JSON.stringify(restoreIpAddresses("1111")));
console.log(JSON.stringify(restoreIpAddresses("010010")));
console.log(JSON.stringify(restoreIpAddresses("101023")));
