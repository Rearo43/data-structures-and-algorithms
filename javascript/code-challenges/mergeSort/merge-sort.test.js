'use strict';

function mergeSort(arr) {
  let n = arr.length;

  if(n > 1) {
    let mid = Math.floor(n/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);

    console.log('left',left, '-----', 'right', right);
    mergeSort(left);
    mergeSort(right);
    console.log(`DONEEEEE ${n}`);
    merge(left, right, arr);
  }

}

function merge(left, right, arr) {
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

  if(i = left.length) {
    
  } else {

  }
}

/* TEST for merge-sort.test.js below
------------------------------------------------------------------------------------------------ */

it('should push an array into mergeSort', () => {
  let arr = [8,4,23,42,16,15];

  expect(mergeSort(arr)).toEqual([8,4,23,42,16,15]);
});
