/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  // 迭代
  if (!root) {
    return 0;
  }
  let queue = [root];
  let depth = 0;
  while (queue.length) {
    let length = queue.length;
    depth++;
    while (length--) {
      let node = queue.shift();
      if (!node.left && !node.right) {
        return depth;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  // 递归
  // if (!root) {
  //   return 0;
  // }
  // if (!root.left && !root.right) {
  //   return 1;
  // }
  // if (root.left && !root.right) {
  //   return 1 + minDepth(root.left);
  // }
  // if (!root.left && root.right) {
  //   return 1 + minDepth(root.right);
  // }
  // return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
// @lc code=end
