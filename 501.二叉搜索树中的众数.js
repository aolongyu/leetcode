/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
  let res = [];
  let maxCount = 0;
  let count = 0;
  let prev = root;
  const find = (node) => {
    if (!node) {
      return;
    }
    find(node.left);
    if (prev.val === node.val) {
      count++;
    } else {
      count = 1;
    }
    if (count === maxCount) {
      res.push(node.val);
    }
    if (count > maxCount) {
      res = [node.val];
      maxCount = count;
    }
    prev = node;
    find(node.right);
  };
  find(root);
  return res;
};
// @lc code=end
