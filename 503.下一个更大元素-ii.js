/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  // 单调栈（减）
  let length = nums.length;
  let res = Array(length).fill(-1);
  let stack = [0];
  for (let i = 1; i < length * 2; i++) {
    let curIndex = i % length;
    let cur = nums[curIndex];
    let topIndex = stack[stack.length - 1];
    let top = nums[topIndex];
    if (top >= cur) {
      stack.push(curIndex);
    } else {
      while (stack.length) {
        let topIndex = stack[stack.length - 1];
        let top = nums[topIndex];
        if (top >= cur) {
          break;
        }
        res[topIndex] = cur;
        stack.pop();
      }
      stack.push(curIndex);
    }
  }
  return res;
};
// @lc code=end

console.log(
  JSON.stringify(
    nextGreaterElements([100, 1, 11, 1, 120, 111, 123, 1, -1, -100])
  )
);
console.log(JSON.stringify(nextGreaterElements([5, 4, 3, 2, 1])));
console.log(JSON.stringify(nextGreaterElements([1, 2, 1])));
