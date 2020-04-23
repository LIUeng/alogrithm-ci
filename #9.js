/**
 * 归并排序
 * 快速排序
 */

// example data
let arr = [4, 2, 6, 7, 8, 8, 3, 1, 5];

// 归并排序 start
// 从小到大
// 分解
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    // 随机取一个中间下标
    let len = arr.length;
    let p = len >> 1;
    let leftA = arr.slice(0, p);
    let rightA = arr.slice(p);
    return merge(mergeSort(leftA), mergeSort(rightA));
}

// 左右合并
function merge(leftA, rightA) {
    let temp = [];
    let leftIndex = 0,
        rightIndex = 0;
    while (leftA.length > leftIndex && rightA.length > rightIndex) {
        if (leftA[leftIndex] > rightA[rightIndex]) {
            temp.push(rightA[rightIndex]);
            rightIndex++;
        } else {
            temp.push(leftA[leftIndex]);
            leftIndex++;
        }
    }
    return temp.concat(leftA.slice(leftIndex)).concat(rightA.slice(rightIndex));
}

// result
console.log("归并排序结果为：", mergeSort([4, 2, 6, 7, 8, 8, 3, 1, 5]));

// end

// 快速排序 start
// 从小到大
// 原地排序算法
function quickSort(arr, left, right) {
    if (left < right) {
        let pivot = right;
        let partitionIndex = partition(arr, pivot, left, right);
        quickSort(
            arr,
            left,
            // partitionIndex - 1 < left ? left : partitionIndex - 1
            partitionIndex - 1
        );
        quickSort(
            arr,
            // partitionIndex + 1 > right ? right : partitionIndex + 1,
            partitionIndex + 1,
            right
        );
    }
    return arr;
}

// 数据交换
const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// 分区
function partition(arr, pivot, left, right) {
    const pivotVal = arr[pivot];
    let startIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotVal) {
            swap(arr, i, startIndex);
            startIndex++;
        }
    }
    swap(arr, startIndex, pivot);
    return startIndex;
}

// 代码分析
// left
// pivot = 2, left = 0, right = 2, pivotVal = 3, startIndex = 2 不交换 2 1 3
// pivot = 1, left = 0, right = 1, pivotVal = 1, startIndex = 0 交换 1 2 3

// result
console.log(
    "快速原地排序结果为：",
    quickSort([2, 1, 3], 0, 2)
);

// 快速排序
// 非原地排序算法
// 从小到大
function quickSortII(arr) {
    if(arr.length <= 1) return arr;
    let leftA = [];
    let rightA = [];
    let pivotElment = arr.shift();
    let centerA = [pivotElment];
    while(arr.length) {
        let curElement = arr.shift();
        if(curElement < pivotElment) {
            leftA.push(curElement)
        } else if(curElement === pivotElment) {
            centerA.push(curElement);
        } else {
            rightA.push(curElement);
        }
    }

    let leftAsorted = quickSortII(leftA);
    let rightAsorted = quickSortII(rightA);
    return leftAsorted.concat(centerA).concat(rightAsorted);
}

// result
console.log('快速排序算法结果为：', quickSortII([2, 1, 3]));
