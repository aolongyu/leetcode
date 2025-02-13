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
  // 2 * (x + y) = x + y + n * (y + z)
  // x = n * (y + z) - y
  // x = (n - 1) * (y + z) + z
  // n = 1 x === z
  // n = 2 ...
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let p = head;
      let q = slow;
      while (p !== q) {
        p = p.next;
        q = q.next;
      }
      return p;
    }
  }
  return null;
};
// @lc code=end
