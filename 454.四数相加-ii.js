/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let map = {};
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let sum = nums1[i] + nums2[j];
      if (!map[sum]) {
        map[sum] = 1;
      } else {
        map[sum]++;
      }
    }
  }
  let res = 0;
  for (let k = 0; k < nums3.length; k++) {
    for (let l = 0; l < nums4.length; l++) {
      let sum = nums3[k] + nums4[l];
      if (map[-sum]) {
        res += map[-sum];
      }
    }
  }
  return res;
};
// @lc code=end

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
console.log(fourSumCount([0], [0], [0], [0]));
