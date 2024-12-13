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
  /**
   * 动态规划
   * dp[i] 0～i的字符中，是否存在于wordDict中
   * 状态转移方程
   *         i >= wordDict[j] && s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]
   *         ? true
   *         : false
   * 初始化 all 0 & dp[0] = true
   * 遍历顺序 i:0~s.length j:0~wordDict.length-1
   * 数据模拟 "leetcode", ["leet", "code"]
   *               l e e t c o d e
   *             1 0 0 0 1 0 0 0 1
   */

  let dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      let word = wordDict[j];
      if (i >= word.length) {
        if (s.slice(i - word.length, i) === word && dp[i - word.length]) {
          dp[i] = true;
        }
      }
    }
  }
  return dp.pop();
};
// @lc code=end

// output: true
console.log(wordBreak("leetcode", ["leet", "code"]));
// output: true
console.log(wordBreak("applepenapple", ["apple", "pen"]));
// output: false
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
