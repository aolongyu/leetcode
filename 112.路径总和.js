/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let isLeaf = (node) => {
  return !node.left && !node.right;
};
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let sum = 0;
  const dfs = (node) => {
    if (!node) return false;
    sum += node.val;
    if (isLeaf(node) && sum === targetSum) {
      return true;
    }
    const has = dfs(node.left) || dfs(node.right);
    sum -= node.val;
    return has;
  };
  return dfs(root);
};
// @lc code=end
