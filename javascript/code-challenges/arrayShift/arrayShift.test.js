'use strict';

const insertShiftArray = (arr, value) => {
  let length = Math.ceil(arr.length / 2);

  arr.splice(length, 0, value);
};





/* TEST for arrayShift.test.js below
------------------------------------------------------------------------------------------------ */

it('Length of array should be original array plus one', () => {
  const a = [1, 2, 3, 4];
  const b = 0;

  expect(a).toStrictEqual(a);
  insertShiftArray(a, b);

  expect(a).toHaveLength(5);
  expect(a[2]).toStrictEqual(0);
});

it('Middle index number should be ', () => {
  const a = [9, 8, 10, 12, 0, -2, 99];
  const b = 0;

  expect(a).toStrictEqual(a);
  insertShiftArray(a, b);

  expect(a).toHaveLength(8);
  expect(a[4]).toStrictEqual(0);
});

it('Original array is untouched/ not mutated ', () => {
  const a = [9, 8, 10, 12, 0, -2, 99];
  const b = [1, 2, 3, 4];
  const c = 0;

  expect(a).toStrictEqual(a);
  insertShiftArray(a, b);

  expect(a).toHaveLength(8);
  expect(a[4]).toStrictEqual(0);
});

