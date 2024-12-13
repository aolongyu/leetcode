/*
 * @lc app=leetcode.cn id=2215 lang=javascript
 *
 * [2215] 找出两数组的不同
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let map1 = new Map();
    let map2 = new Map();

    let ans = [[], []];
    for (let i = 0; i < nums1.length; i++) {
        map1.set(nums1[i], true);
    }
    for (let i = 0; i < nums2.length; i++) {
        if (!map1.get(nums2[i])) {
            ans[1].push(nums2[i]);
            map1.set(nums2[i], true);
        }
        map2.set(nums2[i], true);
    }
    for (let i = 0; i < nums1.length; i++) {
        if (!map2.get(nums1[i])) {
            ans[0].push(nums1[i]);
            map2.set(nums1[i], true);
        }
    }
    return ans;
};
// @lc code=end
