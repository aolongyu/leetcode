/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null
  }
  const mid = Math.floor(nums.length / 2);
  let leftNums = nums.slice(0, mid);
  let left = sortedArrayToBST(leftNums);
  let rightNums = nums.slice(mid + 1);
  let right = sortedArrayToBST(rightNums);
  return new TreeNode(nums[mid], left, right);
};
// @lc code=end
