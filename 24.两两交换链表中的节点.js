/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let prevHead = new ListNode(0, head);
  let prevNode = prevHead;
  while (prevNode && prevNode.next && prevNode.next.next) {
    let a = prevNode.next;
    let b = prevNode.next.next;
    a.next = b.next;
    b.next = a;
    prevNode.next = b;
    prevNode = prevNode.next.next;
  }
  return prevHead.next;
};
// @lc code=end
