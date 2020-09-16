'use strict';

mergeSort(arr) {
    let n = arr.length;

    if(n > 1) {
        let mid = n/2;
        let left = arr.slice(0, mid);
        let right = arr.slice(mid, n);

        mergeSort(left);
        mergeSort(right);

        merge(left, right, arr);
    }

}

merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while(i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            arr[k] = left[i];

            i = j + 1;
        } else {
            arr[k] = right[i];

            k = k + 1;
        }
    }
}

/* TEST for merge-sort.test.js below
------------------------------------------------------------------------------------------------ */
