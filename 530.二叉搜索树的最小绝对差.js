/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  // 递归
  // let pre = null;
  // const inorder = (node) => {
  //   if (!node) {
  //     return Infinity;
  //   }
  //   let left = inorder(node.left);
  //   let curMin = pre ? node.val - pre.val : Infinity;
  //   pre = node;
  //   let right = inorder(node.right);
  //   return Math.min(curMin, left, right);
  // };
  // return inorder(root);

  // 迭代
  if (!root) {
    return 0;
  }
  let queue = [];
  let prev = null;
  let curr = root;
  let min = Infinity;
  while (curr || queue.length) {
    if (curr) {
      queue.push(curr);
      curr = curr.left;
    } else {
      let node = queue.pop();
      min = Math.min(min, prev ? node.val - prev.val : Infinity);
      prev = node;
      curr = node.right;
    }
  }
  return min;
};
// @lc code=end
