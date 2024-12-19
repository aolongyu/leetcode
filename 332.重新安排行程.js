/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let ticketsMap = {};
  let used = {};
  for (let i = 0; i < tickets.length; i++) {
    const [from, to] = tickets[i];
    if (!ticketsMap[from]) {
      ticketsMap[from] = [to];
      used[from] = [];
    } else {
      ticketsMap[from].push(to);
      ticketsMap[from].sort((a, b) => a.charCodeAt() - b.charCodeAt());
    }
  }
  let res = [];
  let path = [];
  const backtracking = (ticketsMap, from) => {
    if (path.length === tickets.length + 1) {
      res.push([...path]);
      return;
    }
    let nexts = ticketsMap[from];
    if (!nexts) {
      return;
    }
    for (let i = 0; i < nexts.length; i++) {
      if (used[from][i]) {
        continue;
      }
      used[from][i] = true;
      path.push(nexts[i]);
      backtracking(ticketsMap, nexts[i]);
      path.pop();
      used[from][i] = false;
    }
  };
  path.push("JFK");
  backtracking(ticketsMap, "JFK");
  return res[0];
};
// @lc code=end

// ["JFK", "MUC", "LHR", "SFO", "SJC"]
// console.log(
//   JSON.stringify(
//     findItinerary([
//       ["MUC", "LHR"],
//       ["JFK", "MUC"],
//       ["SFO", "SJC"],
//       ["LHR", "SFO"],
//     ])
//   )
// );
// ["JFK","ATL","JFK","SFO","ATL","SFO"]
// ["JFK","SFO","ATL","JFK","ATL","SFO"]
console.log(
  JSON.stringify(
    findItinerary([
      ["JFK", "SFO"],
      ["JFK", "ATL"],
      ["SFO", "ATL"],
      ["ATL", "JFK"],
      ["ATL", "SFO"],
    ])
  )
);

console.log(
  JSON.stringify(
    findItinerary([
      ["JFK", "KUL"],
      ["JFK", "NRT"],
      ["NRT", "JFK"],
    ])
  )
);
