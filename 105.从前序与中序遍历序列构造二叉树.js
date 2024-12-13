/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }
  let curVal = preorder.shift();
  let curIndex = inorder.indexOf(curVal);
  let leftPreorder = preorder.slice(0, curIndex);
  let rightPreorder = preorder.slice(curIndex);
  let leftInorder = inorder.slice(0, curIndex);
  let rightInorder = inorder.slice(curIndex + 1);
  let leftNode = buildTree(leftPreorder, leftInorder);
  let rightNode = buildTree(rightPreorder, rightInorder);
  return new TreeNode(curVal, leftNode, rightNode);
};
// @lc code=end
