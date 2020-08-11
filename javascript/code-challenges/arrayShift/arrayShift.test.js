'use strict';

const insertShiftArray = (arr, value) => {
  console.log(arr, value);
  // return arr;
};





/* TEST for arrayShift.test.js below
------------------------------------------------------------------------------------------------ */

// describe('Challenge-02', () => {
it('Place outside value in middle of the array', () => {
  const a = [1, 2, 3, 4];
  const b = 0;
  insertShiftArray(a, b);
  expect(a).toStrictEqual([1, 2, 0, 3, 4]);
  expect(a).toHaveLength(5);
  expect(a[2]).toStrictEqual(0);
});
// })
