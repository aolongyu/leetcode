/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // 递归
  // if (!root) {
  //   return [];
  // }
  // return [
  //   ...postorderTraversal(root.left),
  //   ...postorderTraversal(root.right),
  //   root.val,
  // ];

  // 迭代
  if (!root) {
    return [];
  }
  let stack = [root];
  let res = [];
  while (stack.length) {
    let top = stack.pop();
    res.push(top.val);
    if (top.left) stack.push(top.left);
    if (top.right) stack.push(top.right);
  }
  return res.reverse();
};
// @lc code=end
