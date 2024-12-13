/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let signFunc = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => parseInt(a / b),
  };
  for (let i = 0; i < tokens.length; i++) {
    if (signFunc[tokens[i]]) {
      let oper2 = stack.pop();
      let oper1 = stack.pop();
      let calculate = signFunc[tokens[i]](oper1, oper2);
      stack.push(calculate);
    } else {
      stack.push(+tokens[i]);
    }
    // console.log(stack);
  }
  return +stack[0];
};
// @lc code=end

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
