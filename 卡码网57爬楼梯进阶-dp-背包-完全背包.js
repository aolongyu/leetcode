var bagWeight = (n, m) => {
  /**
   * 完全背包
   * dp定义 dp[j] 0～i物品任选，j容量包的最高价值
   * 转移方程 dp[j] = max(dp[j], dp[j - i])
   * 初始化 dp[0] = 1
   * 遍历顺序 先背包，后物品
   */

  let dp = Array(n + 1).fill(0);
  dp[0] = 1;
  for (let j = 0; j <= n; j++) {
    for (let i = 0; i < m; i++) {
      if (j < i + 1) {
        continue;
      }

      let r = j - (i + 1);
      dp[j] += dp[r];
    }

    console.log(dp.toString());
  }

  return dp[n];
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
let input = []
readline.on('line', (line) => {
  input.push(line)
})
readline.on('close', () => {
  const [n, m] = input[0].split(' ').map(Number)
  console.log(bagWeight(n, m));
  
})

// output: 3
console.log(bagWeight(3, 2));
