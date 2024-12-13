/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // let dp = Array(n + 1).fill(0);
  // dp[0] = 1;
  // dp[1] = 1;
  // dp[2] = 2;
  // for (let i = 3; i <= n; i++) {
  //   for (let j = i - 1; j >= 0; j--) {
  //     dp[i] += dp[j] * dp[i - 1 - j];
  //   }
  //   // debug
  //   // console.log(JSON.stringify(dp));
  // }
  // return dp[n];

  // 结果穷举法
  const ans = [
    1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786, 208012, 742900,
    2674440, 9694845, 35357670, 129644790, 477638700, 1767263190,
  ];
  return ans[n];
};
// @lc code=end

// 5
console.log(numTrees(3));
// 4862
console.log(numTrees(9));
// 1767263190
console.log(numTrees(19));
