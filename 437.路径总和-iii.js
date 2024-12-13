/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    return dfs(root, targetSum, []);
};

var dfs = (node, targetSum, preVals) => {
    if (!node) {
        return 0;
    }
    let count = node.val === targetSum ? 1 : 0;

    let curSum = node.val;
    for (let i = preVals.length - 1; i >= 0; i--) {
        curSum += preVals[i];
        if (curSum === targetSum) {
            count++;
        }
    }

    let curPreVals = [...preVals, node.val];
    return count + dfs(node.left, targetSum, curPreVals) + dfs(node.right, targetSum, curPreVals);
};
// @lc code=end

