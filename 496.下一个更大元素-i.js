/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // 单调栈（减）
  let map = new Map();
  let stack = [nums2[0]];
  for (let i = 1; i < nums2.length; i++) {
    let cur = nums2[i];
    let top = stack[stack.length - 1];
    if (top >= cur) {
      stack.push(cur);
    } else {
      while (stack.length) {
        let top = stack[stack.length - 1];
        if (top >= cur) {
          break;
        }
        stack.pop();
        map.set(top, cur);
      }
      stack.push(cur);
    }
  }
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    res[i] = map.get(nums1[i]) ?? -1;
  }
  return res;
};
// @lc code=end

console.log(JSON.stringify(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])));
console.log(JSON.stringify(nextGreaterElement([2, 4], [1, 2, 3, 4])));
