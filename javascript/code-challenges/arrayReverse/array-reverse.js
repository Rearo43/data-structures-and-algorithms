'use strict';

// Tests -------------------

// let arr = [10, 9, 8, 7, 6];
// let arr = [12, 3, 5, 9];
// let arr = [1, 2, 3, 4, 5];
// let arr = [22, 55, 33, 77, 88, 11];
let arr = [4, 3, 2, 6, 0];

console.log(
  arr.sort((a, b) => arr.indexOf(b)- arr.indexOf(a))
);
