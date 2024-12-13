/*
 * @lc app=leetcode.cn id=1679 lang=javascript
 *
 * [1679] K 和数对的最大数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);

    let start = 0;
    let end = nums.length - 1;

    let ans = 0;

    while (start < end) {
        if (nums[start] + nums[end] === k) {
            start++;
            end--;
            ans++;

            continue;
        }
    
        if (nums[start] + nums[end] > k) {
            end--;
            
            continue;
        }
        if (nums[start] + nums[end] < k) {
            start++;

            continue;
        }
    }

    return ans;
};
// @lc code=end

