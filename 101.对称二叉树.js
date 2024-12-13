/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  // if (!root) {
  //   return true;
  // }
  // if (!root.left && !root.right) {
  //   return true;
  // }
  // if ((root.left && !root.right) || (!root.left && root.right)) {
  //   return false;
  // }
  // let queue = [root.left, root.right];
  // while (queue.length) {
  //   let length = queue.length;
  //   if (length % 2 === 1) {
  //     return false;
  //   }
  //   for (let i = 0; i < length / 2; i++) {
  //     if (queue[i]?.val !== queue[length - i - 1]?.val) {
  //       return false;
  //     }
  //   }
  //   while (length--) {
  //     let node = queue.shift();
  //     if (!node) {
  //       continue;
  //     }
  //     queue.push(node.left);
  //     queue.push(node.right);
  //   }
  // }
  // return true;
  const compare = (node1, node2) => {
    let effientCount = (node1 ? 1 : 0) + (node2 ? 1 : 0);
    if (effientCount === 0) {
      return true;
    }
    if (effientCount === 1) {
      return false;
    }
    if (node1.val !== node2.val) {
      return false;
    }
    let outside = compare(node1.left, node2.right);
    let inside = compare(node1.right, node2.left);
    return outside && inside;
  };

  if (!root) {
    return true;
  }
  return compare(root.left, root.right);
};
// @lc code=end
