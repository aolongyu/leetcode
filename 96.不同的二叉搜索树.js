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
  // 核心思想
  // 三个节点时有三种情况：左节点2+右节点0、左节点1+右节点1、左节点0+右节点2
  let dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }
  return dp[n];
};
// @lc code=end

// 5
console.log(numTrees(3));
// 4862
console.log(numTrees(9));
// 1767263190
console.log(numTrees(19));
