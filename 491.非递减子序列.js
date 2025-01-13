/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 非递减子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let res = [];
  let path = [];
  const backtracking = (startIndex) => {
    if (path.length >= 2) {
      res.push([...path]);
    }
    let layerUsedNum = {};
    for (let i = startIndex; i < nums.length; i++) {
      if (layerUsedNum[nums[i]] || nums[i] < path[path.length - 1]) {
        continue;
      }
      layerUsedNum[nums[i]] = true;
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return res;
};
// @lc code=end

console.log(JSON.stringify(findSubsequences([4, 6, 7, 7])));
console.log(
  JSON.stringify(
    findSubsequences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1])
  )
);
