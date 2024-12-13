/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) {
    return [];
  }
  let res = [];
  let path = [];
  const dfs = (node) => {
    path.push(node.val);
    if (!node.left && !node.right) {
      res.push([...path]);
    } else {
      if (node.left) {
        dfs(node.left);
        path.pop();
      }
      if (node.right) {
        dfs(node.right);
        path.pop();
      }
    }
  };
  dfs(root);
  return res.map((item) => item.join("->"));
};
// @lc code=end
