/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
const getRight = (node) => {
  if (!node) {
    return null;
  }
  if (node.right) {
    return getRight(node.right);
  } else {
    return node;
  }
};
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) {
    return null;
  }
  const res = new TreeNode(0, root);
  let parentNode = res;
  let preDirection = "left";
  while (true) {
    if (!root) {
      break;
    }
    if (root.val > key) {
      parentNode = root;
      root = root.left;
      preDirection = "left";
    } else if (root.val < key) {
      parentNode = root;
      root = root.right;
      preDirection = "right";
    } else {
      if (root.left && root.right) {
        const leftMax = getRight(root.left);
        leftMax.right = root.right.left;
        root.right.left = root.left;
        root.left = null;
        parentNode[preDirection] = root.right;
      } else if (root.left) {
        parentNode[preDirection] = root.left;
      } else if (root.right) {
        parentNode[preDirection] = root.right;
      } else {
        parentNode[preDirection] = null;
      }
      break;
    }
  }
  return res.left;
};
// @lc code=end
