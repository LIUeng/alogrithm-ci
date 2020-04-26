/**
 * 二分查找
 * 递归 & 非递归实现
 */

// 非递归实现
function binarySearch(arr, n, value) {
    let low = 0, high = n - 1;
    while(low <= high) {
        let mid = (low + high) >> 1;
        if(arr[mid] == value) {
            return mid;
        } else if(arr[mid] > value) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

// result
console.log('二分查找非递归实现结果为：', binarySearch([1, 3, 4, 5, 6, 7, 8, 9, 9], 9, 5));

// 递归实现
function binarySearchRecursive(arr, low, high, value) {
    if(low > high) return -1;
    let mid = low + ((high - low) >> 1);
    if(arr[mid] < value) {
        return binarySearchRecursive(arr, mid + 1, high, value);
    } else if(arr[mid] == value) {
        return mid;
    } else {
        return binarySearchRecursive(arr, low, mid - 1, value);
    }
}

// result
console.log('二分查找递归实现结果为：', binarySearchRecursive([1, 3, 4, 5, 6, 7, 8, 9, 9], 0, 9, 5));