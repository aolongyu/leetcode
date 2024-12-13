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
  /**
   * 动态规划
   * 背包 bagweight = Math.floor(sum(stones) / 2)
   * dp[i][j] 0～i的石头任选，装满j容量的背包最大和为dp[i][j]
   * 状态转移方程
   *         j < nums[i]
   *         ? dp[i][j] = dp[i - 1][j]
   *         : dp[i][j] = Math.max(dp[i - 1][j], nums[i] + dp[j - nums[i]])
   * 初始化 all 0 & dp[0][j] = nums[0] < j ? 0 : nums[0]
   * 遍历顺序 i:1~length-1 j:1~bagweight
   * 数据模拟 [2, 7, 4, 1, 8, 1]
   *         bagweight = 23 / 2 -> 11
   *           - 0 1 2 3 4 5 6 7 8 9 10 11
   *         - 2 0 0 2 2 2 2 2 2 2 2  2  2
   *         - 7 0 0 2 2 2 2 2 7 7 9  9  9
   *         - 4 0 0 2 2 4 4 6 7 7 9  9 11
   *         - 1 0 1 2 3 4 5 6 7 8 9 10 11
   *         - 8 0 1 2 3 4 5 6 7 8 9 10 11
   *         - 1 0 1 2 3 4 5 6 7 8 9 10 11
   */

  // 版本一 二维数组
  // let sum = stones.reduce((a, b) => a + b, 0);
  // let bagweight = Math.floor(sum / 2);
  // let dp = Array.from({ length: stones.length }, () =>
  //   Array(bagweight + 1).fill(0)
  // );
  // for (let j = stones[0]; j <= bagweight; j++) {
  //   dp[0][j] = stones[0];
  // }
  // // debug
  // // console.log(0, JSON.stringify(dp[0]));
  // for (let i = 1; i < stones.length; i++) {
  //   for (let j = 1; j <= bagweight; j++) {
  //     if (j < stones[i]) {
  //       dp[i][j] = dp[i - 1][j];
  //     } else {
  //       let r = j - stones[i];
  //       dp[i][j] = Math.max(dp[i - 1][j], stones[i] + dp[i - 1][r]);
  //     }
  //   }
  //   // debug
  //   // console.log(i, JSON.stringify(dp[i]));
  // }
  // return sum - 2 * dp.pop().pop();

  // 优化版 数组压缩 一维数组
  let sum = stones.reduce((a, b) => a + b, 0);
  let bagweight = Math.floor(sum / 2);
  let dp = Array(bagweight + 1).fill(0);
  for (let j = stones[0]; j <= bagweight; j++) {
    dp[j] = stones[0];
  }
  // debug
  // console.log(0, JSON.stringify(dp));
  for (let i = 1; i < stones.length; i++) {
    for (let j = bagweight; j >= 0; j--) {
      if (j < stones[i]) {
        break;
      }
      let r = j - stones[i];
      dp[j] = Math.max(dp[j], stones[i] + dp[r]);
    }
    // debug
    // console.log(i, JSON.stringify(dp));
  }
  return sum - 2 * dp.pop();
};
// @lc code=end

// output: 1
console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1]));
// output: 5
console.log(lastStoneWeightII([31, 26, 33, 21, 40]));
