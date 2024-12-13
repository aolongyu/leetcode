/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
const isLeaf = (node) => {
  return !node.left && !node.right;
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  // 递归
  // if (!root) {
  //   return 0;
  // }
  // if (root.left && isLeaf(root.left)) {
  //   return root.left.val + sumOfLeftLeaves(root.right);
  // }
  // return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);

  // 迭代
  if (!root) {
    return 0;
  }
  let res = 0;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node.left) {
      if (isLeaf(node.left)) {
        res += node.left.val;
      } else {
        queue.push(node.left);
      }
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return res;
};
// @lc code=end
