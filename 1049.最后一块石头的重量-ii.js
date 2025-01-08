/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  // 核心思想：石头分为两堆 使两堆石头重量差距最小
  // 最小差值即为剩余石头重量
  let sum = stones.reduce((a, b) => a + b, 0);
  let bagweight = Math.floor(sum / 2);
  let dp = Array(bagweight + 1).fill(0);
  for (let i = 0; i < stones.length; i++) {
    for (let j = bagweight; j >= 0; j--) {
      if (j < stones[i]) {
        break;
      }
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }
  return sum - 2 * dp[bagweight];
};
// @lc code=end

// output: 1
console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1]));
// output: 5
console.log(lastStoneWeightII([31, 26, 33, 21, 40]));
