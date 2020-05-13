/**
 * 利用分冶算法
 * 逆序度个数
 */

// 题目描述
/*
 * 2, 4, 3, 1, 5, 6
 * 逆序对 (2, 1) (4, 3) (3, 1) (4, 1) 4个
 */

let count = 0, num = 0;
// 归并排序数组
function merge_sort(arr, n) {
    merge_sort_c(arr, 0, n - 1);
    return arr;
}

// 递归调用函数
function merge_sort_c(arr, p, r) {
    if (p >= r) return;
    // 取中间位置
    let q = (p + r) >> 1;
    debugger;
    merge_sort_c(arr, p, q);
    merge_sort_c(arr, q + 1, r);
    merge(arr, p, q, r);
}

// 合并
function merge(arr, p, q, r) {
    let temp = [];
    let i = p,
        j = q + 1,
        k = 0;
    while (i <= q && j <= r) {
        debugger;
        if (arr[i] > arr[j]) {
            console.log('i: j: ', q - i + 1);
            count += q - i + 1;
            num++;
            temp[k++] = arr[j++];
        } else {
            temp[k++] = arr[i++];
        }
    }
    // 处理剩下的
    // left
    while (i <= q) {
        temp[k++] = arr[i++];
    }

    // right
    while (j <= r) {
        temp[k++] = arr[j++];
    }

    console.log(temp, arr);

    // 维持 arr 引用
    for (let m = 0; m <= r - p; m++) {
        arr[p + m] = temp[m];
    }
}

console.log(merge_sort([2, 4, 3, 1, 5, 6], 6));
console.log("逆序对个数为：", count, num);
