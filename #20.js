/**
 * 回溯算法
 * 全排列组合有多少种
 */

// 题目
// 字符串 abcd 由这几个字符能组合多少种方式 并输出所有结果

function backTrack(s) {
    let res = [];
    function dfs(str, cur) {
        // debugger;
        if (str === "") {
            return res.push(cur);
        }
        for (let i = 0, len = str.length; i < len; i++) {
            cur += str[i];
            dfs(str.slice(0, i).concat(str.slice(i + 1)), cur);
            // 每次循环完毕 保证字符串长度一致
            cur = cur.slice(0, cur.length - 1);
        }
    }

    dfs(s, '');

    return res;
}

// result
console.log("组合排列结果为：", backTrack("abcd"));

// parse
// str = abcd, cur = '', len = 4, i = 0
// dfs 1
// cur = a str = bcd len = 3 i = 0
// cur = ab str = cd len = 2 i = 0 flag
// cur = abc str = d len = 1 i = 0
// cur = abcd str = '' len = 0 i = 0
// i = 1
// cur = ab str = cd len = 2 i = 1
// cur = abd str = c len = 1 i = 1
// cur = abdc str = '' len = 0 i = 0
// i = 1
// cur = a str = bcd len = 3 i = 1
// cur = ac str = bd len = 2 i = 0
// cur = acbd
// 依次类推
