// data
let exarr = [3, 2, 4, 5, 6, 1];

/**
 * 冒泡排序
 * 从大到小
 */
function bubbleSort(arr, n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n - i - 1; j++) {
            if(arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// 代码分析
// 第一次
// i = 0, j = 0 => arr[j] = 3, arr[j + 1] = 2 => 不交换 3 2 4 5 6 1
// i = 0, j = 1 => arr[j] = 2, arr[j + 1] = 4 => 交换 3 4 2 5 6 1
// i = 0, j = 2 => arr[j] = 2, arr[j + 1] = 5 => 交换 3 4 5 2 6 1
// i = 0, j = 3 => arr[j] = 2, arr[j + 1] = 6 => 交换 3 4 5 6 2 1
// i = 0, j = 4 => arr[j] = 2, arr[j + 1] = 1 => 不交换 3 4 5 6 2 1

// 第二次
// i = 1, j = 0 => arr[j] = 3, arr[j + 1] = 4 => 交换 4 3 5 6 2 1
// i = 1, j = 1 => arr[j] = 3, arr[j + 1] = 5 => 交换 4 5 3 6 2 1
// 以此类推

/**
 * 冒泡排序优化
 * 没有交换时，提前退出
 */
function bubbleSortOptimize(arr, n) {
    for(let i = 0; i < n; i++) {
        let flag = false;
        for(let j = 0; j < n - i - 1; j++) {
            if(arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
            }
        }
        if(!flag) break;
    }
    return arr;
}


// result
console.log('冒泡排序结果为：', bubbleSort([3, 2, 4, 5, 6, 1], 6));
console.log('冒泡排序优化后结果为：', bubbleSortOptimize([3, 2, 4, 5, 6, 1], 6));

/**
 * 插入排序
 * 从小到大
 */
function insertionSort(arr, n) {
    for(let i = 1; i < n; i++) {
        let value = arr[i]; // i = 1, 2
        let j = i - 1; // j = 0, 3
        for(;j >= 0; j--) {
            if(value < arr[j]) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = value;
    }
    return arr;
}

// 代码分析
// i = 0, 3, j = -1, arr[0] = 3, 数组：3, 2, 4, 5, 6, 1
// i = 1, 2, j = 0, arr[1] = 3, arr[0] = 2, 数组：2, 3, 4, 5, 6, 1
// i = 2, 4, j = 1 0, arr[0] = 2, arr[1] = 3, arr[2] = 4
// ...
// i = 5, 1, j = 4 3 2 1 0, arr[0] = 1 

// result
console.log('插入排序结果为：', insertionSort([3, 2, 4, 5, 6, 1], 6));

// result arr
// console.log(exarr);

/**
 * 选择排序
 * 从小到大
 * 每次招到最小值
 */
function chooseSort(arr, n) {
    for(let i = 0; i < n; i++) {
        let minIndex = i;
        for(let j = i + 1; j < n; j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// 代码分析
// 第一次 [3, 2, 4, 5, 6, 1]
// ...

// result
console.log('选择排序结果为：', chooseSort([3, 2, 4, 5, 6, 1], 6));