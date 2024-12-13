/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
const construct = (list) => {
  let maxVal = -1;
  let maxIndex = -1;
  for (let i = 0; i < list.length; i++) {
    if (maxVal < list[i]) {
      maxVal = list[i];
      maxIndex = i;
    }
  }
  let leftList = list.slice(0, maxIndex);
  let rightList = list.slice(maxIndex + 1);
  return {
    maxVal,
    leftList,
    rightList,
  };
};
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) {
    return null;
  }
  const { maxVal, leftList, rightList } = construct(nums);
  let leftNode = constructMaximumBinaryTree(leftList);
  let rightNode = constructMaximumBinaryTree(rightList);
  return new TreeNode(maxVal, leftNode, rightNode);
};
// @lc code=end
