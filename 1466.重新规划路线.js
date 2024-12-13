/*
 * @lc app=leetcode.cn id=1466 lang=javascript
 *
 * [1466] 重新规划路线
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    // let change = 0;
    // let targets = new Set();
    // targets.add(0);

    // while (connections.length) {
    //     let [a, b] = connections.shift();
    //     if (targets.has(b)) {
    //         targets.add(a);
    //         continue;
    //     }
    //     if (targets.has(a)) {
    //         change++;
    //         targets.add(b);
    //         continue;
    //     }
    //     connections.push([a, b]);
    // }

    // return change;

    let edges = {};

    for (let i = 0; i < connections.length; i++) {
        const [a, b] = connections[i];
        
        if (!edges[a]) {
            edges[a] = { to: [], from: [] };
        }
        edges[a].to.push(b);
        if (!edges[b]) {
            edges[b] = { to: [], from: [] };
        }
        edges[b].from.push(a);
    }

    let visited = new Set();
    let change = edges[0].to.length;
    let targets = [...edges[0].from, ...edges[0].to];
    targets.forEach(t => visited.add(t));

    while (targets.length) {
        const city = targets.shift();
        if (!visited.has(city)) {
            const cityEdge = edges[city];
            change += cityEdge.to.length;
            targets.push(...cityEdge.from, ...cityEdge.to);
            visited.add(city);
        }
    }

    return change;
};
// @lc code=end

