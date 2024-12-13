/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  // 递归
  // if (!root) {
  //   return null;
  // }
  // if (root.val === val) {
  //   return root;
  // }
  // if (root.val > val) {
  //   return searchBST(root.left, val);
  // }
  // return searchBST(root.right, val);

  // 迭代
  if (!root) {
    return null;
  }
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node.val === val) {
      return node;
    }
    if (node.val > val) {
      node.left && queue.push(node.left);
    } else {
      node.right && queue.push(node.right);
    }
  }
  return null;
};

// @lc code=end
