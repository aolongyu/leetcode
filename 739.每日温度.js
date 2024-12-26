/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let dailies = Array(temperatures.length).fill(0);
  let stack = [0];
  for (let i = 1; i < temperatures.length; i++) {
    let curr = temperatures[i];
    while (stack.length) {
      let topIndex = stack.pop();
      let top = temperatures[topIndex];
      if (top >= curr) {
        stack.push(topIndex, i);
        break;
      }
      dailies[topIndex] = i - topIndex;
    }
    stack.push(i);
  }
  return dailies;
};
// @lc code=end

console.log(
  JSON.stringify(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
);
