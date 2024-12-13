/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
var oddEvenList = function(head) {
    let oddHead = new ListNode();
    let odd = oddHead;
    let evenHead = new ListNode();
    let even = evenHead;

    let idx = 0;

    while (head) {
        if (++idx % 2 === 0) {
            even.next = new ListNode(head.val);
            even = even.next;
        } else {
            odd.next = new ListNode(head.val);
            odd = odd.next;
        }

        head = head.next;
    }

    odd.next = evenHead.next;

    return oddHead.next;
};
// @lc code=end

