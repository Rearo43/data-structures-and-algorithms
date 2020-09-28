'use strict';

// let targetEx = 5;
let targetEx = 16;
// let targetEx = 11;
let arrEx = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
//--Index----0--1--2--3--4--5--6---7---8---9--10--11--12--13--14--15---16
//--Key------------*-------------------M---------------------------------

// function split(arr, target){
//   let index = Math.ceil(arr.length / 2);
//   let value = arr[index];
//   console.log(`index: ${index}, value: ${value}`);

//   if(target !== value){
//     let left = 0;


//     if(target < value){
//       index = Math.ceil(index / 2);
//       console.log('new index', index );
//       value = arr[index];
//       console.log('new value', value);
//     }

//     if(target > value){
//       index = index / 2;
//       value = arr[index + (index / 2)];
//     }

//   }
//   if(target === value){
//     return index;
//   }
// }


function findTarget(arr, target) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let midIndex = Math.ceil(arr.length / 2);
  let midValue = arr[midIndex];

  if(!arr.length) {
    return -1;
  } else if (arr.length === 1) {
    if (arr[0] === target) {
      return 0;
    } else {
      return -1;
    }
  } else if (midValue === target) {
    return midIndex;
  } else {
    if(arr[midValue] > target) {
      //code
    } else if (arr[midValue] < target) {
      //code
    }
  }
}

function split(arr, start, end, target) {
  let mid = Math.floor((start + end)/ 2);
}



// split(arrEx, targetEx);
//LOOKING AT INDEX position until the end and then do value of index


/* TEST for array-binary-search.test.js below
------------------------------------------------------------------------------------------------ */

xit('check', () => {
  let arr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  let value = 5;
  expect(split(arr, value)).toStrictEqual(2);
});
describe('Edge cases regarding empty and arrays with length of one', () => {

  it('Empty array', () => {
    let arr = [];
    let target = 3;
    expect(findTarget(arr, target)).toStrictEqual(-1);
  });

  it('Target in array with length of one', () => {
    let arr = [3];
    let target = 3;
    expect(findTarget(arr, target)).toStrictEqual(0);
  });

  it('Target NOT in array with length of one', () => {
    let arr = [3];
    let target = 5;
    expect(findTarget(arr, target)).toStrictEqual(-1);
  });
});

it('Target is value of first split', () => {
  let arr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  let target = 12;
  expect(findTarget(arr, target)).toStrictEqual(9);
});

