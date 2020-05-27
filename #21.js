/**
 * 动态规划
 * 矩阵最短路径
 * 0 - 1 背包问题
 */

// 矩阵最短路径 4 * 4，左上角 -> 右上角
// 规则：只能从下或者往右
// 1 3 5 9
// 2 1 3 4
// 5 2 6 7
// 6 8 4 3

let matrixGraph = [
    [2, 3, 5, 9],
    [2, 1, 3, 4],
    [5, 2, 6, 7],
    [6, 8, 4, 3],
];

// 回溯法
let minDist = Number.MAX_VALUE;
/**
 *
 * @param {number} i 行
 * @param {number} j 列
 * @param {number} dist 当前走过的距离
 * @param {array} w 二维数组记录当前数据
 * @param {number} n 矩阵大小
 */
function matrix(i, j, dist = 0, w = [[]], n) {
    if (i === n && j === n) {
        if(dist < minDist) minDist = dist;
        return;
    }

    // 向下走
    if (i < n) {
        matrix(i + 1, j, dist + (w[i][j]), w, n);
    }

    // 向右走
    if (j < n) {
        matrix(i, j + 1, dist + (w[i][j]), w, n);
    }
}

// result
// invoking
matrix(0, 0, 0, matrixGraph, 3)
console.log("矩阵最短路径为：", minDist);

// 动态规划
function matrixDP(w, n) {
    // 初始化数据
    // 第一行数据
    
}
