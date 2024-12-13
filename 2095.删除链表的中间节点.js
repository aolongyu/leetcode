/*
 * @lc app=leetcode.cn id=2095 lang=javascript
 *
 * [2095] 删除链表的中间节点
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
var deleteMiddle = function(head) {
    let node = head;
    let temp = [];

    while (node !== null) {
        temp.push(node);
        node = node.next;
    }
    let len = temp.length;
    if (len <= 1) {
        head = new ListNode();
    } else {
        let index = Math.floor(len / 2);
        let mid = temp[index];
        let midPre = temp[index - 1];
        midPre.next = mid.next;
    }
    return head;
};
// @lc code=end

