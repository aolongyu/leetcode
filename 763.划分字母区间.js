/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let maxIndexes = {};
  for (let i = 0; i < s.length; i++) {
    maxIndexes[s[i]] = i;
  }
  let res = [];
  let prevSliceStart = -1;
  let currMaxIndex = 0;
  for (let i = 0; i < s.length; i++) {
    currMaxIndex = Math.max(currMaxIndex, maxIndexes[s[i]]);
    if (currMaxIndex === i) {
      res.push(i - prevSliceStart);
      prevSliceStart = i;
    }
  }
  return res;
};
// @lc code=end

console.log(partitionLabels("ababcbacadefegdehijhklij"));
console.log(partitionLabels("eaaaabaaec"));
