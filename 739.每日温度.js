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
  // 单调栈（减）
  let dailies = Array(temperatures.length).fill(0);
  let stack = [0];
  for (let i = 1; i < temperatures.length; i++) {
    let curIndex = i;
    let cur = temperatures[curIndex];
    let topIndex = stack[stack.length - 1];
    let top = temperatures[topIndex];
    if (top >= cur) {
      stack.push(curIndex);
    } else {
      while (stack.length) {
        topIndex = stack[stack.length - 1];
        top = temperatures[topIndex];
        if (top >= cur) {
          break;
        }
        dailies[topIndex] = curIndex - topIndex;
        stack.pop();
      }
      stack.push(curIndex);
    }
  }
  return dailies;
};
// @lc code=end
console.log(
  JSON.stringify(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
);
