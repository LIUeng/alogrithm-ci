/**
 * 字符串匹配算法
 */

// BF 算法
/**
 *
 * @param {主串} n
 * @param {模式串} m
 */
function bf(n, m) {
    for (let i = 0; i < n.length; i++) {
        let target = "";
        for (let j = i; j < i + m.length; j++) {
            target += n[j];
        }
        console.log(target);
        if (target === m) {
            return i;
        }
    }
    return -1;
}

// result
console.time();
console.log("字符串匹配bf算法结果为：", bf("aacbcab", "c"));
console.timeEnd();

// RK 算法
/**
 *
 * @param {主串} n
 * @param {模式串} m
 */
function rk(n, m) {
    // 先求出主串所有子串的 hash 值
    let hashss = [],
        mlen = m.length,
        nlen = n.length;
    for (let i = 0; i < nlen; i++) {
        if (i + mlen - 1 >= nlen) break;
        if (!hashss.length) {
            let str = n.slice(i, i + mlen);
            hashss.push(hash(str));
        } else {
            hashss.push(
                (hashss[i - 1] - Math.pow(26, mlen - 1) * hashs[n[i - 1]]) * 26 +
                    hashs[n[i + mlen - 1]]
            );
        }
    }
    // 计算 模式串 m 的 hash 值
    let mhash = hash(m);
    for (let i = 0; i < hashss.length; i++) {
        if (hashss[i] == mhash) return i;
    }
    return -1;
}

// 构造hash函数
const hashs = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
};
/**
 * 26个字母 对应 26进制 防止冲突
 * @param {String} str
 */
function hash(str) {
    let sum = 0,
        len = str.length; // 求和
    for (let i = 0; i < len; i++) {
        sum += Math.pow(26, len - i - 1) * hashs[str[i]];
    }
    return sum;
}

// result
console.time();
console.log("字符串匹配rk算法结果为：", rk("aacbcab", "ab"));
console.timeEnd();

// 分析
// h[i - 1] => 对应子串 S[i - 1, i + m - 2]
// h[i - 1] = 26^m-1 * S[i - 1] + ... + 26^0 * S[i + m - 2]
// h[i] => 对应子串 S[i, i + m - 1]
// h[i] = 26^m-1 * S[i] + ... + 26^0 * S[i + m - 1]
// h[i] = (h[i - 1] - 26^m-1 * S[i - 1]) * 26 + S[i + m - 1]
