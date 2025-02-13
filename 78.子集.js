/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];
  let path = [];
  const backTracking = (start) => {
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backTracking(i + 1);
      path.pop();
    }
  };
  backTracking(0);
  return res;
};
// @lc code=end

console.log(JSON.stringify(subsets([1, 2, 3])));
