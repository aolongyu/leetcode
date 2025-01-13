/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
const isValid = (str) => {
  if (str.length === 0 || str.length > 3) {
    return false;
  }
  if (str[0] === "0" && str.length > 1) {
    return false;
  }
  let num = +str;
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
  const backtracking = (startIndex) => {
    if (path.length === 4) {
      if (startIndex === s.length) {
        res.push(path.join("."));
      }
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      let str = s.slice(startIndex, i + 1);
      if (!isValid(str)) {
        continue;
      }
      path.push(+str);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return res;
};
// @lc code=end

console.log(JSON.stringify(restoreIpAddresses("25525511135")));
console.log(JSON.stringify(restoreIpAddresses("0000")));
console.log(JSON.stringify(restoreIpAddresses("1111")));
console.log(JSON.stringify(restoreIpAddresses("010010")));
console.log(JSON.stringify(restoreIpAddresses("101023")));
