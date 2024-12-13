/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;

    let maxWater = 0;
    
    while (start < end) {
        let x = end - start;
        let y = Math.min(height[start], height[end]);

        let curWater = x * y;

        maxWater = Math.max(curWater, maxWater);

        if (height[start] <= height[end]) {
            start++;
            continue;
        }
        end--;
    }

    return maxWater;
};
// @lc code=end

