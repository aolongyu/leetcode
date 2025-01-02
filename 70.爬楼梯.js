/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // [1,2,3,5,8,13,21,...]

  // if (n < 2) {
  //   return n
  // }
  // let dp = [1, 2];
  // for (let i = 2; i < n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2];
  // }
  // return dp.pop();

  // 数组压缩
  if (n < 2) {
    return n;
  }
  let a = 1;
  let b = 2;
  for (let i = 2; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};
// @lc code=end

//
console.log(climbStairs(5));
