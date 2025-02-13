/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let n1 = s.length;
  let n2 = wordDict.length;
  let dp = Array(n1 + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n1; i++) {
    for (let j = 0; j < n2; j++) {
      let word = wordDict[j];
      let curr = s.slice(i - word.length, i);
      if (word === curr && dp[i - word.length]) {
        dp[i] = true;
      }
    }
  }
  return dp[n1];
};
// @lc code=end

// output: true
console.log(wordBreak("leetcode", ["leet", "code"]));
// output: true
console.log(wordBreak("applepenapple", ["apple", "pen"]));
// output: false
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
