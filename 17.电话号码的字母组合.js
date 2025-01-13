/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
const KeyMap = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let group = [];
  for (let i = 0; i < digits.length; i++) {
    KeyMap[digits[i]] && group.push(KeyMap[digits[i]]);
  }
  if (group.length === 0) {
    return [];
  }

  let res = [];
  let path = [];
  const backtracking = (index) => {
    if (index === group.length) {
      res.push(path.join(""));
      return;
    }
    for (let i = 0; i < group[index].length; i++) {
      path.push(group[index][i]);
      backtracking(index + 1);
      path.pop();
    }
  };
  backtracking(0);
  return res;
};
// @lc code=end

console.log(JSON.stringify(letterCombinations("29")));
