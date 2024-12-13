/*
 * @lc app=leetcode.cn id=1372 lang=javascript
 *
 * [1372] 二叉树中的最长交错路径
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
var longestZigZag = function(root) {
    return Math.max(dfs(root.left, 'left', 0, 0), dfs(root.right, 'right', 0, 0));
};

var dfs = (node, direction, a, b) => {
    if (!node) {
        return Math.max(a, b);
    }

    if (direction === 'left') {
        a++;
    }
    if (direction === 'right') {
        b++;
    }

    return Math.max(dfs(node.left, 'left', b, 0), dfs(node.right, 'right', 0, a));
};
// @lc code=end

