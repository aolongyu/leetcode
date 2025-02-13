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
  // 核心思想：减掉根元素，左子树和右子树分配剩余节点
  // 3个节点的情况：左0右2 左1右1 左2右0
  let dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
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
