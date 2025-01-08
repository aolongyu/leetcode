/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const getLen = (node) => {
  let len = 0;
  while (node) {
    node = node.next;
    len++;
  }
  return len;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lenA = getLen(headA);
  let lenB = getLen(headB);
  let pA = headA;
  let pB = headB;
  if (lenA > lenB) {
    let diff = lenA - lenB;
    while (diff--) {
      pA = pA.next;
    }
  }
  if (lenA < lenB) {
    let diff = lenB - lenA;
    while (diff--) {
      pB = pB.next;
    }
  }
  while (pA && pB) {
    if (pA === pB) {
      return pA;
    }
    pA = pA.next;
    pB = pB.next;
  }
  return null;
};
// @lc code=end
