/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let queue = [];
  let res = [];
  let index = 0;
  while (index < nums.length) {
    if (index >= k) {
      if (queue[0] === nums[index - k]) {
        queue.shift();
      }
    }
    if (queue[0] < nums[index] || queue.length === 0) {
      queue = [nums[index]];
    } else {
      let i = queue.length - 1;
      while (i >= 0 && queue[i] < nums[index]) {
        i--;
      }
      queue.length = i + 1;
      queue.push(nums[index]);
    }
    res.push(queue[0]);
    index++;
  }
  return res.slice(k - 1);
};
// @lc code=end

console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1, -1], 1));
