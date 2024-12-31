/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let res = [];
  let path = [];
  const Target = graph.length - 1;
  let dfs = (source) => {
    if (source === Target) {
      res.push([...path]);
      return;
    }
    let targets = graph[source];
    for (let i = 0; i < targets.length; i++) {
      let target = targets[i];
      path.push(target);
      dfs(target);
      path.pop();
    }
  };
  path.push(0);
  dfs(0);
  return res;
};
// @lc code=end

console.log(JSON.stringify(allPathsSourceTarget([[1, 2], [3], [3], []])));
console.log(
  JSON.stringify(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]))
);
