/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // x = (n - 1)(y + z) + z
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let index1 = head;
      let index2 = slow;
      while (index1 !== index2) {
        index1 = index1.next;
        index2 = index2.next;
      }
      return index1;
    }
  }
  return null;
};
// @lc code=end
