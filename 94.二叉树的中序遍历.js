/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  // 递归
  // if (!root) {
  //   return [];
  // }
  // return [
  //   ...inorderTraversal(root.left),
  //   root.val,
  //   ...inorderTraversal(root.right),
  // ];

  // 迭代
  if (!root) {
    return [];
  }
  let stack = [];
  let curr = root;
  let res = [];
  while (curr || stack.length) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      let top = stack.pop();
      res.push(top.val);
      curr = top.right;
    }
  }
  return res;
};
// @lc code=end
