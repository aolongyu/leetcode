var bagWeight = (n) => {
  /**
   * 一维
   * 时间复杂度 O(n)
   * 空间复杂度 O(n)
   */
  // let dp = [1, 2];

  // for (let i = 2; i < n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2];
  // }

  // return dp[n - 1];

  /**
   * 滚动变量
   * 时间复杂度 O(n)
   * 空间复杂度 O(1)
   */
  let a = 1
  let b = 2
  for (let i = 2; i < n; i++) {
    let t = a + b
    a = b
    b = t
  }

  return b
};


// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })
// let input = []
// readline.on('line', (line) => {
//   input.push(line)
// })
// readline.on('close', () => {
//   const [n, m] = input[0].split(' ').map(Number)
//   console.log(bagWeight(n, m));
// })

// output: 3
console.log(bagWeight(3));
