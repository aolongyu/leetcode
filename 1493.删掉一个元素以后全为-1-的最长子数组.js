/*
 * @lc app=leetcode.cn id=1493 lang=javascript
 *
 * [1493] 删掉一个元素以后全为 1 的最长子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let ans = 0;
    for (let left = 0; left < nums.length - 1; left++) {
        let right = left;
        let zeroCount = 0;
        while (right < nums.length) {
            if (nums[right] === 0) {
                zeroCount++;
            }
            if (zeroCount > 1) {
                ans = Math.max(ans, right - left - 1);
                break;
            }
            if (right === nums.length - 1) {
                ans = Math.max(ans, right - left);
                break;
            }
            right++;
        }
    }

    return ans;
};
// @lc code=end

console.log(longestSubarray([1,1,0,1]));
console.log(longestSubarray([0,1,1,1,0,1,1,0,1]));
console.log(longestSubarray([1,1,1]));