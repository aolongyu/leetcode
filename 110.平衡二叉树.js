/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  // 递归
  const depth = (node) => {
    if (!node) {
      return 0;
    }
    let leftDepth = depth(node.left);
    if (leftDepth === -1) {
      return -1;
    }
    let rightDepth = depth(node.right);
    if (rightDepth === -1) {
      return -1;
    }
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
    }
    return 1 + Math.max(leftDepth, rightDepth);
  };
  let d = depth(root);
  return d === -1 ? false : true;
};
// @lc code=end
