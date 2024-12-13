/*
 * @lc app=leetcode.cn id=2130 lang=javascript
 *
 * [2130] 链表最大孪生和
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
 * @return {number}
 */
var pairSum = function(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);

        head = head.next;
    }

    let ans = -Infinity;
    let len = arr.length;
    for (let i = 0; i < len / 2; i++) {
        ans = Math.max(ans, arr[i] + arr[len - i - 1]);
    }

    return ans;
};
// @lc code=end

