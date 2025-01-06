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
  // 动态规划
  // let handle = [-prices[0], 0];
  // for (let i = 1; i < prices.length; i++) {
  //   handle = [
  //     Math.max(handle[0], -prices[i]),
  //     Math.max(handle[1], handle[0] + prices[i]),
  //   ]
  // }
  // return handle[1];

  // 贪心算法
  let prevMin = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - prevMin);
    prevMin = Math.min(prevMin, prices[i]);
  }
  return profit;
};
// @lc code=end

// 5
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
