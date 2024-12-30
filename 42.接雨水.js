/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 单调栈（增）
  // let sum = 0;
  // let stack = [0];
  // for (let i = 1; i < height.length; i++) {
  //   let rightIndex = i;
  //   let right = height[rightIndex];
  //   let topIndex = stack[stack.length - 1];
  //   let top = height[topIndex];
  //   if (top > right) {
  //     stack.push(rightIndex);
  //   } else if (top === right) {
  //     stack.pop();
  //     stack.push(rightIndex);
  //   } else {
  //     while (stack.length) {
  //       let midIndex = stack[stack.length - 1];
  //       let mid = height[midIndex];
  //       if (mid > right) {
  //         break;
  //       }
  //       stack.pop();
  //       if (!stack.length) {
  //         break;
  //       }
  //       let leftIndex = stack[stack.length - 1];
  //       let left = height[leftIndex];
  //       if (left > mid) {
  //         let h = Math.min(left, right) - mid;
  //         let w = rightIndex - leftIndex - 1;
  //         sum += h * w;
  //       }
  //     }
  //     stack.push(rightIndex);
  //   }
  // }
  // return sum;

  // 裁剪（双指针）
  let cuts = 0;
  let leftMax = 0;
  let rightMax = 0;
  for (let i = 0; i < height.length; i++) {
    cuts += height[i];
    if (leftMax < height[i]) {
      cuts += (height[i] - leftMax) * i;
      leftMax = height[i];
    }
    let ri = height.length - 1 - i;
    if (rightMax < height[ri]) {
      cuts += (height[ri] - rightMax) * i;
      rightMax = height[ri];
    }
  }
  return leftMax * height.length - cuts;
};
// @lc code=end

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
