/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

var MyLinkedList = function () {
  this.size = 0;
  this.head = null;
  this.tail = null;
};

MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index > this.size) {
    return null;
  }
  let node = this.head;
  while (index--) {
    node = node.next;
  }
  return node;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.size) {
    return -1;
  }
  return this.getNode(index).val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.head = new LinkNode(val, this.head);
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.tail.next = new LinkNode(val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let prevNode = this.getNode(index - 1);
  prevNode.next = new LinkNode(val, prevNode.next);
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let prevNode = this.getNode(index - 1);
  prevNode.next = prevNode.next.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
