/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let res = [];
  while (queue.length) {
    let length = queue.length;
    let currRes = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      currRes.push(node.val);
      node.children?.forEach((n) => queue.push(n));
    }
    res.push(currRes);
  }
  return res;
};
// @lc code=end
