/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 动态规划
  // let handle = [-prices[0], 0];
  // for (let i = 1; i < prices.length; i++) {
  //   handle = [
  //     Math.max(handle[0], handle[1] - prices[i]),
  //     Math.max(handle[1], handle[0] + prices[i]),
  //   ]
  // }
  // return handle[1];

  // 贪心算法
  // 核心思想，吃涨避跌
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    let diff = prices[i] - prices[i - 1];
    if (diff > 0) {
      profit += diff;
    }
  }
  return profit;
};
// @lc code=end

// 7
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// 4
console.log(maxProfit([1, 2, 3, 4, 5]));
// 0
console.log(maxProfit([7, 6, 4, 3, 1]));
