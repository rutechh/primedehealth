var Utility = /** @class */ (function () {
    function Utility() {
    }
    // swapArray(arr, k) {
    //     // Check empty array or lesser than k
    //     let len = arr.length;
    //     if (len === 0 || len < k) return arr;
    //     let kVal = arr[k];
    //     arr[k] = arr[0];
    //     arr[0] = kVal;
    //     return arr;
    // }
    Utility.prototype.rotateArray = function (arr, k) {
        // Check empty array or lesser than k
        var len = arr.length;
        if (len === 0 || len < k)
            return arr;
        k = k % len;
        return arr.slice(k).concat(arr.slice(0, k));
    };
    Utility.prototype.isMonotonic = function (array) {
        if (array.length <= 1) {
            return true;
        }
        var isMonotoneIncreasing = true;
        var isMonotoneDecreasing = true;
        for (var i = 1; i < array.length; i++) {
            // Check monotone decreasing
            if (array[i] > array[i - 1]) {
                isMonotoneDecreasing = false;
            }
            // Check monotone increasing
            if (array[i] < array[i - 1]) {
                isMonotoneIncreasing = false;
            }
        }
        return isMonotoneIncreasing || isMonotoneDecreasing;
    };
    return Utility;
}());
// Test Cases
console.log(new Utility().rotateArray([1, 2, 3], 2));
console.log(new Utility().rotateArray([], 3));
console.log(new Utility().isMonotonic([1, 2, 3, 4])); // true
console.log(new Utility().isMonotonic([10, 3, 4, 6])); // false
console.log(new Utility().isMonotonic([9])); // true
