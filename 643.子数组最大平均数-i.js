/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let start = 0;
    let end = start + k;

    let curSum = nums.slice(start, end).reduce((sum, cur) => {
        return sum + cur;
    }, 0);

    let maxAverage = curSum / k;

    while(end <= nums.length - 1) {
        curSum = curSum - nums[start] + nums[end];

        let curAverage = curSum / k;
        maxAverage = Math.max(maxAverage, curAverage);

        start++;
        end++;
    }

    return maxAverage;
};
// @lc code=end
