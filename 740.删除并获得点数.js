/*
 * @lc app=leetcode.cn id=740 lang=javascript
 *
 * [740] 删除并获得点数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  let rewards = nums.reduce((t, c) => {
    if (t[c] === void 0) {
      t[c] = 0;
    }
    t[c] += c;
    return t;
  }, []);

  let len = rewards.length;
  if (len === 0) return 0;

  let dp = [
    rewards[0] || 0,
    Math.max(rewards[0] || 0, rewards[1] || 0),
    Math.max(rewards[1] || 0, rewards[0] || 0 + rewards[2] || 0),
  ];
  if (len < 3) {
    return dp[len - 1];
  }

  for (let i = 3; i < len; i++) {
    dp[i] = (rewards[i] || 0) + Math.max(dp[i - 2], dp[i - 3]);
  }

  return Math.max(dp[len - 2], dp[len - 1]);
};
// @lc code=end

console.log(deleteAndEarn([3, 4, 2]));
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
