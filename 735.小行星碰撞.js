/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 小行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        stack.push(asteroids[i]);

        while (stack.length >= 2) {
            let top1 = stack.pop();
            let top2 = stack.pop();

            if (top1 < 0 && top2 > 0) {
                if (Math.abs(top1) < Math.abs(top2)) {
                    stack.push(top2);
                    continue;
                } else if (Math.abs(top1) > Math.abs(top2)) {
                    stack.push(top1);
                    continue;
                }
                break;
            }

            stack.push(top2, top1);
            break;
        }
    }

    return stack;
};
// @lc code=end

console.log(asteroidCollision([-2,-1,1,2]));
console.log(asteroidCollision([5,10,-5]));
console.log(asteroidCollision([8,-8]));
console.log(asteroidCollision([10,2,-5]));