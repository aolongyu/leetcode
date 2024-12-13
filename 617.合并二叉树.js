/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  // 递归
  // if (root1 && root2) {
  //   root1.val += root2.val;
  // } else {
  //   return root1 || root2;
  // }
  // root1.left = mergeTrees(root1.left, root2.left);
  // root1.right = mergeTrees(root1.right, root2.right);
  // return root1;

  // 迭代
  if (!root1) {
    return root2;
  }
  if (!root2) {
    return root1;
  }
  let queue1 = [root1];
  let queue2 = [root2];
  while (queue1.length || queue2.length) {
    let node1 = queue1.shift();
    let node2 = queue2.shift();

    if (node1 && node2) {
      node1.val += node2.val;
      if (node1.left && node2.left) {
        queue1.push(node1.left);
        queue2.push(node2.left);
      } else {
        node1.left = node1.left || node2.left;
      }
      if (node1.right && node2.right) {
        queue1.push(node1.right);
        queue2.push(node2.right);
      } else {
        node1.right = node1.right || node2.right;
      }
    }
  }
  return root1;
};
// @lc code=end
