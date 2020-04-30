/**
 * 二分查找
 * 递归 & 非递归实现
 */

// 非递归实现
function binarySearch(arr, n, value) {
    let low = 0,
        high = n - 1;
    while (low <= high) {
        let mid = (low + high) >> 1;
        if (arr[mid] == value) {
            return mid;
        } else if (arr[mid] > value) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

// result
console.log(
    "二分查找非递归实现结果为：",
    binarySearch([1, 3, 4, 5, 6, 7, 8, 9, 9], 9, 5)
);

// 递归实现
function binarySearchRecursive(arr, low, high, value) {
    if (low > high) return -1;
    let mid = low + ((high - low) >> 1);
    if (arr[mid] < value) {
        return binarySearchRecursive(arr, mid + 1, high, value);
    } else if (arr[mid] == value) {
        return mid;
    } else {
        return binarySearchRecursive(arr, low, mid - 1, value);
    }
}

// result
console.log(
    "二分查找递归实现结果为：",
    binarySearchRecursive([1, 3, 4, 5, 6, 7, 8, 9, 9], 0, 9, 5)
);

// 二分查找变形问题
// 1. 查找第一个值等于给定值
function binarySearchVariant1(arr, n, value) {
    let low = 0,
        high = n - 1;
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (arr[mid] == value) {
            if (mid == 0 || arr[mid - 1] != value) {
                return mid;
            } else {
                high = mid - 1;
            }
        } else if (arr[mid] > value) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}

// 2. 查找最后一个值等于给定值
function binarySearchVariant2(arr, n, value) {
    let low = 0,
        high = n - 1;
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (arr[mid] == value) {
            if (mid == 0 || arr[mid + 1] != value) {
                return mid;
            } else {
                low = mid + 1;
            }
        } else if (arr[mid] > value) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}

// 3. 查找第一个大于等于给定值
function binarySearchVariant3(arr, n, value) {
    let low = 0,
        high = n - 1;
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (arr[mid] >= value) {
            if (mid == 0 || arr[mid - 1] < value) {
                return mid;
            } else {
                high = mid - 1;
            }
        } else {
            low = mid + 1;
        }
    }
}

// 4. 查找最后一个小于等于给定值
function binarySearchVariant3(arr, n, value) {
    let low = 0,
        high = n - 1;
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (arr[mid] <= value) {
            if (mid == n - 1 || arr[mid + 1] > value) {
                return mid;
            } else {
                low = mid + 1;
            }
        } else {
            high = mid - 1;
        }
    }
}

// 5. 有序旋转数组找出给定值 [4, 5, 6, 7, 1, 2, 3] 不重复
function binarySearchRotate(arr, value) {
    let low = 0,
        high = arr.length - 1;
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (arr[mid] == value) {
            return mid;
        }
        if (arr[mid] > arr[low]) {
            if (arr[mid] > value && arr[low] > value) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            if (arr[mid] < value && arr[high] < value) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }
    return -1;
}

// result
console.log(
    "有序旋转数组结果为：",
    binarySearchRotate([4, 5, 6, 7, 1, 2, 3], 0)
);

// code parse
// low = 0, high = 6, mid = 3, arr[mid] = 7, 7 > 4 true, low = 3 + 1
// low = 4, high = 6, mid = 5, arr[mid] = 2, 2 === 2 true, mid = 4,

// 6. 旋转有序数组变形问题 找出旋转数组最小值 不重复
function findBinarySearchMin(arr) {
    let low = 0,
        high = arr.length - 1;
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (arr[mid + 1] < arr[mid]) {
            return arr[mid + 1];
        }
        if (arr[mid - 1] > arr[mid]) {
            return arr[mid];
        }
        if (arr[mid] > arr[low]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

// result
console.log(
    "旋转有序数组最小值结果为：",
    findBinarySearchMin([4, 5, 6, 7, 2, 3])
);

// 7. 旋转有序数组变形问题 找出旋转数组最小值 存在重复值
function findBinarySearchMinII(arr) {
    let low = 0,
        high = arr.length - 1;
    while (low < high) {
        let mid = low + ((high - low) >> 1);
        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else if (arr[mid] < arr[high]) {
            high = mid;
        } else {
            low = high - 1;
        }
    }
    return arr[low];
}

// result
console.log(
    "旋转有序数组最小值结果为，存在重复值：",
    findBinarySearchMinII([1, 3, 5]),
    findBinarySearchMinII([2, 2, 2, 0, 1])
);
