/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // 单调栈（增）
  heights.unshift(0);
  heights.push(0);
  let maxArea = 0;
  let stack = [0];
  for (let i = 1; i < heights.length; i++) {
    let rightIndex = i;
    let right = heights[rightIndex];
    let topIndex = stack[stack.length - 1];
    let top = heights[topIndex];
    if (top < right) {
      stack.push(rightIndex);
    } else if (top === right) {
      stack.pop();
      stack.push(rightIndex);
    } else {
      while (stack.length) {
        let midIndex = stack[stack.length - 1];
        let mid = heights[midIndex];
        if (mid < right) {
          break;
        }
        stack.pop();
        if (!stack.length) {
          break;
        }
        let leftIndex = stack[stack.length - 1];
        let h = mid;
        let w = rightIndex - leftIndex - 1;
        maxArea = Math.max(maxArea, w * h);
      }
      stack.push(rightIndex);
    }
  }
  return maxArea;
};
// @lc code=end

console.log(largestRectangleArea([0, 9]));
// 10
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
// 4
console.log(largestRectangleArea([2, 4]));
