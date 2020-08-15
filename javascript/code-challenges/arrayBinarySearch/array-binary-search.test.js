'use strict';

let targetEx = 5;
// let targetEx = 16;
// let targetEx = 11;
let arrEx = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
//--Index----0--1--2--3--4--5--6---7---8---9--10--11--12--13--14--15---16
//--Key------------*-------------------M---------------------------------

function split(arr, target){
  let initSplit = Math.ceil((arr.length / 2) - 1);
  let useIndex = arr[initSplit];
  console.log(initSplit);

  while(target === useIndex){
    if(target < useIndex){
      // console.log('less');
      console.log(less(initSplit, useIndex, arr));
    }

    if(target > useIndex){
      console.log('greater');
    }

    if(target === useIndex){
      console.log('equal: FOUND!');
      console.log(`Target: ${targetEx}, Found Number: ${useIndex}, Index Found: ${initSplit}`);

      // return initSplit;
    }
  }
}

split(arrEx, targetEx);
//LOOKING AT INDEX position until the end and then do value of index

//Helper functions ----------------

function less(initSplit, useIndex, arr){
  let b = Math.ceil(initSplit / 2);
  return useIndex = arr[b];
}

function more(){
  let b = arr.length
  let a = Math.ceil(a / 2);
}

// function found(index){
//   return index;
// }

// while (middle !== value) {
//   if(value > middle){
//     console.log('h');
//   }

//   if(value < middle){
//     console.log('h');
//   }
// }


/* TEST for array-binary-search.test.js below
------------------------------------------------------------------------------------------------ */

it('check', () => {
  let arr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  let value = 5;
  expect(split(arr, value)).toStrictEqual(2);
});

