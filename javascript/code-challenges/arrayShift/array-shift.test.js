/* eslint-disable quotes */
"use strict";

const insertShiftArray = (arr, value) => {
  const newArr = [];
  const middle = Math.ceil(arr.length / 2);

  for (let i = 0; i < middle; i++) {
    newArr.push(arr[i]);
  }

  newArr.push(value);

  for (let i = middle; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
};

/* TEST for array-shift.test.js below
------------------------------------------------------------------------------------------------ */

it("Length of array should be original array plus one", () => {
  const a = [9, 8, 10, 12, -1, -2, 99];
  const b = [1, 2, 3, 4];
  const c = 0;

  expect(insertShiftArray(a, c)).toHaveLength(8);
  expect(insertShiftArray(b, c)).toHaveLength(5);
});

it("Middle index number replaced with Value (odd num arrays round up) ", () => {
  const a = [9, 8, 10, 12, -1, -2, 99];
  const b = [1, 2, 3, 4];
  const c = 0;

  expect(insertShiftArray(a, c)[4]).toStrictEqual(0);
  expect(insertShiftArray(b, c)[2]).toStrictEqual(0);
});

it("Original array should be untouched/ not mutated ", () => {
  const a = [9, 8, 10, 12, -1, -2, 99];
  const b = [1, 2, 3, 4];
  const c = 0;

  insertShiftArray(a, c);
  insertShiftArray(b, c);

  expect(a).toStrictEqual([9, 8, 10, 12, -1, -2, 99]);
  expect(b).toStrictEqual([1, 2, 3, 4]);
});
