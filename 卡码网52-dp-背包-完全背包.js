var bagWeight = (n, bagweight, weightValues) => {
  let dp = Array(bagweight + 1).fill(0);
  for (let j = weightValues[0][0]; j <= bagweight; j++) {
    let mult = Math.floor(j / weightValues[0][0]);
    dp[j] = mult * weightValues[0][1];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= bagweight; j++) {
      if (j < weightValues[i][0]) {
        continue;
      }
      dp[j] = Math.max(dp[j], weightValues[i][1] + dp[j - weightValues[i][0]]);
    }
  }
  // console.log(JSON.stringify(dp));

  return dp[bagweight];
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
readline.on("line", (line) => {
  input.push(line);
});
readline.on("close", () => {
  const [n, bagweight] = input.shift().split(" ").map(Number);
  const weightValues = input.map((line) => line.split(" ").map(Number));
  console.log(bagWeight(n, bagweight, weightValues));
});

// 4 5
// 1 2
// 2 4
// 3 4
// 4 5

// console.log(
//   bagWeight(4, 5, [
//     [1, 2],
//     [2, 4],
//     [3, 4],
//     [4, 5],
//   ])
// );
