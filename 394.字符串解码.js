/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (']' === s[i]) {
            let curStr = '';
            while (true) {
                let str = stack.pop();
                if ('[' === str) {
                    break;
                }
                curStr = str + curStr;
            }
            let curNum = '';
            while(true) {
                let str = stack.pop();
                if (!/[0-9]/.test(str)) {
                    str && stack.push(str);
                    break;
                }
                curNum = str + curNum;
            }

            let current = '';
            let num = +curNum;
            while (num--) {
                current += curStr;
            }
            stack.push(...current.split(''))
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join('');
};
// @lc code=end

console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
console.log(decodeString('abc3[cd]xyz'));