/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let res = [];
  while (queue.length) {
    let length = queue.length;
    let levelSum = 0;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      levelSum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(levelSum / length);
  }
  return res;
};
// @lc code=end
