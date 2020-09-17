'use strict';

function quickSort(arr, left, right) {
    if(left < right) {
        let position = partition(arr, left, right);
        quick

        quickSort(arr, left, position + 1);
        quickSort(arr, position + 1, right);
    }
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let low = left - 1;

    for(){

        if(arr[i] <= pivot) {
            low++
        }

        swap(arr, right, low + 1);
    }

    return low + 1;
}

function swap(arr, i, low) {
    let temp;
    temp === arr[i];
    arr[i] === arr[low];
    arr[low] === temp;
}
