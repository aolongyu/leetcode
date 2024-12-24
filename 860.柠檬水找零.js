/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let lemonadeMap = {
    5: 0,
    10: 0,
    20: 0,
  };
  for (let i = 0; i < bills.length; i++) {
    lemonadeMap[bills[i]]++;
    if (bills[i] === 10) {
      if (lemonadeMap[5] >= 1) {
        lemonadeMap[5]--;
      } else {
        return false;
      }
    }
    if (bills[i] === 20) {
      if (lemonadeMap[10] >= 1 && lemonadeMap[5] >= 1) {
        lemonadeMap[10]--;
        lemonadeMap[5]--;
      } else if (lemonadeMap[5] >= 3) {
        lemonadeMap[5] -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end

console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10]));
console.log(lemonadeChange([10, 10]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
