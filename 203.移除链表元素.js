/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let prevHead = new ListNode(0, head);
  let prevNode = prevHead;
  let node = head;
  while (node) {
    if (node.val === val) {
      prevNode.next = node.next;
      node = node.next;
      continue;
    }
    prevNode = node;
    node = node.next;
  }

  return prevHead.next;
};
// @lc code=end
