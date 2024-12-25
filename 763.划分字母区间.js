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
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i;
  }
  let res = [];
  let pre = -1;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    max = Math.max(max, map[char]);
    if (i === map[char] && max === i) {
      res.push(i - pre);
      pre = i;
    }
  }
  return res;
};
// @lc code=end

console.log(partitionLabels("ababcbacadefegdehijhklij"));
console.log(partitionLabels("eaaaabaaec"));
