/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let leaf1Arr = dfs(root1);
    let leaf2Arr = dfs(root2);

    return JSON.stringify(leaf1Arr) === JSON.stringify(leaf2Arr);
};

var dfs = (node) => {
    if (!node) {
        return [];
    }

    if (!node.left && !node.right) {
        return [node.val];
    }
    return [...dfs(node.left), ...dfs(node.right)];
};
// @lc code=end

