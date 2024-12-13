
/**
 * 二维数组
 */
// var bagWeight = (m, n, weights, values) => {
//   // 下标定义 i:物品 j:包容量
//   // dp定义 dp[i][j] 表示前i个物品在j个包容量的情形下所能容纳的最高价值
//   // 初始化 全局0 & dp[0][j] = j < weights[0] ? 0 : values[0]
//   // 状态转移方程 dp[i][j] = j < weights ? dp[i - 1][j] : Math.max(dp[i - 1][j], values[i] + dp[i - 1][j - weights[i]])
//   // 输出 dp[m - 1][n]

//   let dp = Array.from({ length: m }, () => Array(n + 1).fill(0))
//   for (let j = weights[0]; j <= n; j++) {
//     dp[0][j] = values[0]
//   }

//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (j < weights[i]) {
//         dp[i][j] = dp[i - 1][j]
//       } else {
//         dp[i][j] = Math.max(dp[i - 1][j], values[i] + dp[i - 1][j - weights[i]])
//       }
//     }
//   }
//   // console.log(JSON.stringify(dp))

//   return dp[m - 1][n]
// }

/**
 * 滚动数组
 */
var bagWeight = (m, n, weights, values) => {
  // 定义 i:0~i物品 j:包容量
  // 状态转移方程 dp[j] = j < weights[i] ? dp[j] : Math.max(dp[j], values[i] + dp[j - weights[i]])
  // 输出 dp[n]

  let dp = Array(n + 1).fill(0)
  for (let j = weights[0]; j <= n; j++) {
    dp[j] = values[0]
  }
  for (let i = 1; i < m; i++) {
    for (let j = n; j > 0; j--) {
      if (j < weights[i]) {
        continue
      } else {
        dp[j] = Math.max(dp[j], values[i] + dp[j - weights[i]])
      }
    }
  }
  // console.log(JSON.stringify(dp))

  return dp[n]
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
let input = []
readline.on('line', (line) => {
  input.push(line)
})
readline.on('close', () => {
  const [m, n] = input[0].split(' ').map(Number)
  const weights = input[1].split(' ').map(Number)
  const values = input[2].split(' ').map(Number)
  console.log(bagWeight(m, n, weights, values))
})

// console.log(bagWeight(6, 1, [2, 2, 3, 1, 5, 2], [2, 3, 1, 5, 4, 3]))
// console.log(bagWeight(1, 1, [1], [10]))
