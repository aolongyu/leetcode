/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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
var minCameraCover = function (root) {
  const NONE = 0;
  const COVER = 1;
  const CAMERA = 2;
  let res = 0;
  const mount = (node) => {
    if (!node) {
      return COVER;
    }
    let left = mount(node.left);
    let right = mount(node.right);
    if (left === NONE || right === NONE) {
      res++;
      return CAMERA;
    }
    if (left === CAMERA || right === CAMERA) {
      return COVER;
    }
    return NONE;
  };
  if (mount(root) === NONE) {
    res++;
  }
  return res;
};
// @lc code=end
