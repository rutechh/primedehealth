class Utility {
    // swapArray(arr, k) {
    //     // Check empty array or lesser than k
    //     let len = arr.length;
    //     if (len === 0 || len < k) return arr;


    //     let kVal = arr[k];

    //     arr[k] = arr[0];
    //     arr[0] = kVal;

    //     return arr;
    // }

    rotateArray(arr: number[], k: number): number[] {
        // Check empty array or lesser than k
        const len = arr.length;
        if (len === 0 || len < k) return arr;

        k = k % len;
        return arr.slice(k).concat(arr.slice(0, k));
    }


    isMonotonic(array: number[]): boolean {
        if (array.length <= 1) {
            return true;
        }

        let isMonotoneIncreasing = true;
        let isMonotoneDecreasing = true;
        for (let i = 1; i < array.length; i++) {
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
    }
}

// Test Cases
console.log('================= Rotate Array ======================');
console.log(new Utility().rotateArray([1, 2, 3], 2));
console.log(new Utility().rotateArray([], 3));


console.log('================= Check Monotonic ======================');
console.log(new Utility().isMonotonic([1, 2, 3, 4])); // true
console.log(new Utility().isMonotonic([10, 3, 4, 6])); // false
console.log(new Utility().isMonotonic([9])); // true