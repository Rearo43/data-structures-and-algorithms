'use strict';

const insertShiftArray = (arr, value) => {
  let length = Math.ceil(arr.length / 2);

  arr.splice(length, 0, value);
};





/* TEST for arrayShift.test.js below
------------------------------------------------------------------------------------------------ */

it('Length of array should be original array plus one', () => {
  const a = [9, 8, 10, 12, -1, -2, 99];
  const b = [1, 2, 3, 4];
  const c = 0;

  insertShiftArray(a, c);
  insertShiftArray(b, c);

  expect(a).toHaveLength(8);
  expect(b).toHaveLength(5);
});

it('Middle index number replaced with Value (odd num arrays round up) ', () => {
  const a = [9, 8, 10, 12, -1, -2, 99];
  const b = [1, 2, 3, 4];
  const c = 0;

  insertShiftArray(a, c);
  insertShiftArray(b, c);

  expect(a[4]).toStrictEqual(0);
  expect(b[2]).toStrictEqual(0);
});

it('Original array should be untouched/ not mutated ', () => {
  const a = [9, 8, 10, 12, -1, -2, 99];
  const b = [1, 2, 3, 4];
  const c = 0;

  insertShiftArray(a, c);
  insertShiftArray(b, c);

  expect(a).toStrictEqual([9, 8, 10, 12, 0, -2, 99]);
  expect(b).toStrictEqual([1, 2, 3, 4]);
});

