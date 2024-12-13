/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let getNext = (needle) => {
    let next = [];
    let j = 0;
    next.push(j);
    for (let i = 1; i < needle.length; i++) {
      while (j > 0 && needle[i] !== needle[j]) {
        j = next[j - 1];
      }
      if (needle[i] === needle[j]) {
        j++;
      }
      next.push(j);
    }
    return next;
  };

  let next = getNext(needle);
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === needle.length) {
      return i - j + 1;
    }
  }

  return -1;
};
// @lc code=end
// 010120
console.log(strStr("aabaabaafa", "aabaaf"));
console.log(strStr("saadbutsad", "ad"));
console.log(strStr("leetcode", "leeto"));
