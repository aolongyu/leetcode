/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 递归
  // let pre = null;
  // const inOrder = (node) => {
  //   if (!node) {
  //     return true;
  //   }
  //   let left = inOrder(node.left);
  //   if (pre && pre.val >= node.val) {
  //     return false;
  //   }
  //   pre = node;
  //   let right = inOrder(node.right);
  //   return left && right;
  // };
  // return inOrder(root);

  // 迭代
  if (!root) {
    return true;
  }
  let queue = [];
  let cur = root;
  let pre = null;
  while (cur || queue.length) {
    if (cur) {
      queue.push(cur);
      cur = cur.left;
    } else {
      let node = queue.pop();
      if (pre && pre.val >= node.val) {
        return false;
      }
      pre = node;
      cur = node.right;
    }
  }
  return true;
};
// @lc code=end
