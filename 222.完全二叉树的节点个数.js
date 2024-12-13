/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
  // 递归
  // if (!root) {
  //   return 0;
  // }
  // return 1 + countNodes(root.left) + countNodes(root.right);

  // 迭代
  if (!root) {
    return 0;
  }
  let queue = [root];
  let res = 0;
  while (queue.length) {
    res++;
    let node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return res;
};
// @lc code=end
