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
  let start = 0;
  let curr = 0;
  let total = 0;
  let len = gas.length;
  for (let i = 0; i < len; i++) {
    let fit = gas[i] - cost[i];
    curr += fit;
    total += fit;
    if (curr < 0) {
      start = i + 1;
      curr = 0;
    }
  }
  return total < 0 ? -1 : start;
};
// @lc code=end

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
