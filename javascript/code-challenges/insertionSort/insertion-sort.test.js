'use strict';

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let index = arr[i];
    let j = j - 1;

    while(j >= 0 && arr[i] > index) {
      arr[j + i] = arr[j];
      j = j -1;
    }

    arr[j + 1] = index;
  }

  return arr;
}


/* TEST for insertion-sort.test.js below
------------------------------------------------------------------------------------------------ */