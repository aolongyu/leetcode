/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
 * @return {number}
 */
var rob = function (root) {
  const robTree = (node) => {
    if (!node) {
      return [0, 0];
    }

    let left = robTree(node.left);
    let right = robTree(node.right);

    return [
      node.val + left[1] + right[1],
      Math.max(...left) + Math.max(...right),
    ];
  };

  return robTree(root);
};
// @lc code=end

console.log(rob([3, 2, 3, null, 3, null, 1]));
