/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let numsSum = nums.reduce((s, c) => {
        return s + c;
    }, 0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((numsSum - nums[i]) / 2 === sum) {
            return i;
        }
        sum += nums[i];
    }
    return -1;
};
// @lc code=end

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));