/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  // 逆中序遍历 右-中-左
  const convert = (node, preNum) => {
    if (!node) {
      return preNum;
    }
    const rn = convert(node.right, preNum);
    node.val += rn;
    return convert(node.left, node.val);
  };
  convert(root, 0);
  return root;
};
// @lc code=end
