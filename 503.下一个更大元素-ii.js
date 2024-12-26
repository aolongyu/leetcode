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
  let baseLength = nums.length;
  nums.push(...nums);
  // console.log(nums);
  let map = {};
  let stack = [0];
  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i];
    while (stack.length) {
      let topIndex = stack.pop();
      let top = nums[topIndex];
      if (top >= cur) {
        stack.push(topIndex, i);
        break;
      }
      map[`${top}_${topIndex}`] = cur;
    }
    stack.push(i);
  }
  // console.log(JSON.stringify(map));
  let nexts = [];
  for (let i = 0; i < baseLength; i++) {
    nexts.push(map[`${nums[i]}_${i}`] ?? -1);
  }
  return nexts;
};
// @lc code=end

console.log(
  JSON.stringify(
    nextGreaterElements([100, 1, 11, 1, 120, 111, 123, 1, -1, -100])
  )
);
console.log(JSON.stringify(nextGreaterElements([5, 4, 3, 2, 1])));
console.log(JSON.stringify(nextGreaterElements([1, 2, 1])));
