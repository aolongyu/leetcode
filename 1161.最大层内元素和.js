/*
 * @lc app=leetcode.cn id=1161 lang=javascript
 *
 * [1161] 最大层内元素和
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
var maxLevelSum = function(root) {
    if (!root) return -1

    var obj = { max: -Infinity, level: -1 }
    var bfs = (nodes, level) => {
        if (!nodes.length) return;

        let sum = 0;
        let nextNodes = [];
        
        while (nodes.length) {
            let curNode = nodes.shift();
            sum += +curNode.val;

            curNode.left && nextNodes.push(curNode.left);
            curNode.right && nextNodes.push(curNode.right);
        }

        if (sum > obj.max) {
            obj.max = sum;
            obj.level = level;
        }

        bfs(nextNodes, level + 1);
    }

    bfs([root], 1);

    return obj.level;
};
// @lc code=end

