/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // if (!root) {
  //   return root;
  // }
  // let queue = [root];
  // while (queue.length) {
  //   let length = queue.length;
  //   while (length--) {
  //     let node = queue.shift();
  //     [node.left, node.right] = [node.right, node.left];
  //     if (node.left) queue.push(node.left);
  //     if (node.right) queue.push(node.right);
  //   }
  // }
  // return root;

  if (!root) {
    return root;
  }
  let rightNode = root.right
  root.right = invertTree(root.left);
  root.left = invertTree(rightNode);
  return root;
};
// @lc code=end
