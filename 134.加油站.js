/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let len = gas.length;
  let start = 0;
  let curSum = 0;
  let totalSum = 0;
  for (let i = 0; i < len; i++) {
    let fit = gas[i] - cost[i];
    curSum += fit;
    totalSum += fit;
    while (curSum < 0) {
      curSum = 0;
      start = i + 1;
    }
  }
  return totalSum < 0 ? -1 : start;
};
// @lc code=end

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
