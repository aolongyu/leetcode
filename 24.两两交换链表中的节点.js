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
  while (head) {
    let node1 = head;
    let node2 = head.next;
    if (!node2) {
      break;
    }
    let nextNode = node2.next;
    prevNode.next = node2;
    node2.next = node1;
    node1.next = nextNode;

    head = nextNode;
    prevNode = node1;
  }

  return prevHead.next;
};
// @lc code=end
