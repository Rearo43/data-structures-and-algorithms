/* eslint-disable quotes */
"use strict";

// let targetEx = 5;
let targetEx = 16;
// let targetEx = 11;
let arrEx = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
//--Index----0--1--2--3--4--5--6---7---8---9--10--11--12--13--14--15---16
//--Key------------*-------------------M---------------------------------

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.ceil((end + start) / 2);

  while (arr[middle] !== target && start < end) {
    if (target < arr[middle]) {
      end = middle - 1;
    } else if (target > arr[middle]) {
      start = middle + 1;
    }

    middle = Math.ceil((end + start) / 2);
  }

  return arr[middle] === target ? middle : -1;
}

/* TEST for array-binary-search.test.js below
------------------------------------------------------------------------------------------------ */
let arr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

it("check", () => {
  let target = 5;

  expect(binarySearch(arr, target)).toStrictEqual(2);
});

it("Target is value of first split", () => {
  let target = 12;

  expect(binarySearch(arr, target)).toStrictEqual(9);
});

describe("Edge cases regarding empty and arrays with length of one", () => {
  it("Empty array", () => {
    let arr = [];
    let target = 3;

    expect(binarySearch(arr, target)).toStrictEqual(-1);
  });

  it("Target in array with length of one", () => {
    let arr = [3];
    let target = 3;

    expect(binarySearch(arr, target)).toStrictEqual(0);
  });

  it("Target NOT in array with length of one", () => {
    let arr = [3];
    let target = 5;

    expect(binarySearch(arr, target)).toStrictEqual(-1);
  });
});
