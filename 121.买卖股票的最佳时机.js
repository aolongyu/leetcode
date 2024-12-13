/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * 动态规划
   */
  // let handle = [-prices[0], 0];

  // // console.log(0, JSON.stringify(handle));
  // for (let i = 1; i < prices.length; i++) {
  //   handle = [
  //     Math.max(handle[0], -prices[i]),
  //     Math.max(handle[1], handle[0] + prices[i]),
  //   ];
  //   // console.log(i, JSON.stringify(handle));
  // }

  // return handle[1];

  /**
   * 贪心算法
   */
  let lowerPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    lowerPrice = Math.min(lowerPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - lowerPrice);
  }

  return maxProfit;
};
// @lc code=end

// 5
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
