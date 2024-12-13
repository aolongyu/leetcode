/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  // if (!root) {
  //   return null;
  // }
  // if (root.val < low) {
  //   return trimBST(root.right, low, high);
  // } else if (root.val > high) {
  //   return trimBST(root.left, low, high);
  // } else {
  //   root.left = trimBST(root.left, low, high);
  //   root.right = trimBST(root.right, low, high);
  //   return root;
  // }
  if (!root) {
    return null;
  }
  // 找根节点
  while (root) {
    if (root.val < low) {
      root = root.right;
    } else if (root.val > high) {
      root = root.left;
    } else {
      break;
    }
  }

  // 剪左枝
  let node = root;
  while (node) {
    while (node.left && node.left.val < low) {
      node.left = node.left.right;
    }
    node = node.left;
  }
  // 剪右枝
  node = root;
  while (node) {
    while (node.right && node.right.val > high) {
      node.right = node.right.left;
    }
    node = node.right;
  }
  return root;
};
// @lc code=end
