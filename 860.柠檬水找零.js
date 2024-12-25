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
  let five = 0;
  let ten = 0;
  for (let i = 0; i < bills.length; i++) {
    let cur = bills[i];
    if (cur === 5) {
      five++;
    }
    if (cur === 10) {
      if (five < 1) {
        return false;
      }
      five--;
      ten++;
    }
    if (cur === 20) {
      if (ten >= 1 && five >= 1) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
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
