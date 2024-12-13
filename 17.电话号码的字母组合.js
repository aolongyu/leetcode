/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") {
    return [];
  }
  let res = [];
  let path = [];
  const backtracking = (list, k) => {
    if (path.length === k) {
      res.push(path.join(""));
      return;
    }
    const [cur, ...rest] = list;
    for (let i = 0; i < cur.length; i++) {
      path.push(cur[i]);
      backtracking(rest, k);
      path.pop();
    }
  };
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
  let list = [];
  for (let i = 0; i < digits.length; i++) {
    list.push(KeyMap[digits[i]]);
  }
  backtracking(list, list.length);
  return res;
};
// @lc code=end

console.log(JSON.stringify(letterCombinations("29")));
