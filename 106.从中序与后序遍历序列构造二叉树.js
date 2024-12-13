/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) {
    return null;
  }
  let curVal;
  let curIndex = -1;
  while (curIndex === -1 && postorder.length) {
    curVal = postorder.pop();
    curIndex = inorder.findIndex((item) => item === curVal);
  }
  let lInorder = inorder.slice(0, curIndex);
  let rInorder = inorder.slice(curIndex + 1);
  let lNode = buildTree(lInorder, [...postorder]);
  let rNode = buildTree(rInorder, [...postorder]);
  return new TreeNode(curVal, lNode, rNode);
};
// @lc code=end
