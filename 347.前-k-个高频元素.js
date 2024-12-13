/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MyPriorityQueue {
  constructor(compare) {
    this.heap = {};
    this.queue = [];
    this.fixFlag = false;
    this.compare = compare;
  }
  enqueue(value) {
    this.fixFlag = true;
    if (!this.heap[value]) {
      this.heap[value] = 1;
    } else {
      this.heap[value]++;
    }
  }
  dequeue() {
    const queue = this.getQueue();
    const top = queue[0];
    delete this.heap[top];
    this.fixFlag = true;
    return +top;
  }
  getQueue() {
    if (!this.fixFlag) {
      return this.queue;
    }
    this.fixFlag = false;
    const entries = Object.entries(this.heap);
    const sortedEntriesByValue = entries.sort(this.compare);
    this.queue = sortedEntriesByValue.map((item) => item[0]);
    return this.queue;
  }
  getPriorityByValue(v) {
    const queue = this.getQueue();
    return queue.findIndex((a) => a === v);
  }
  getValueByPriority(p) {
    const queue = this.getQueue();
    return queue[p];
  }
}
var topKFrequent = function (nums, k) {
  const compare = (a, b) => b[1] - a[1];
  let priorityQueue = new MyPriorityQueue(compare);
  for (let i = 0; i < nums.length; i++) {
    priorityQueue.enqueue(nums[i]);
  }
  let res = [];
  while (k--) {
    res.push(priorityQueue.dequeue());
  }
  return res;
};
// @lc code=end

console.log(topKFrequent([1, 1, 1, 2, 2, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
