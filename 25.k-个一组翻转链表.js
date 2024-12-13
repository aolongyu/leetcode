/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let vnode = head;
  let pre = vnode;

  while (vnode) {
    let count = k;
    while (count--) {
      vnode = vnode.next;
      if (!vnode) {
        break;
      }
    }
    []
  }
};
// @lc code=end
