/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
	let ans = k;

	for (let left = 0; left < nums.length - k; left++) {
		let zeroCount = 0;
		let right = left;
		while (right < nums.length) {
			if (nums[right] === 0) {
				zeroCount++;
			}
			if (zeroCount > k) {
				ans = Math.max(ans, right - left);
				break;
			}
			right++;
		}
		ans = Math.max(ans, right - left);
	}

	return ans;
};
// @lc code=end
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1], 0))
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))