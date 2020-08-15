'use strict';

// let targetEx = 5;
// let targetEx = 16;
let targetEx = 11;
let arrEx = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
//--Index----0--1--2--3--4--5--6---7---8---9--10--11--12--13--14--15---16
//--Key------------*-------------------M---------------------------------

function split(arr, target){
  let index = Math.ceil((arr.length / 2) - 1);
  let value = arr[index];
  console.log(value, index);

  if(target === value){
    return index;
  }

  while(target !== value){

    if(target < value){
      value = arr[index/2];
      index = index / 2;
    }

    if(target > value){
      value = arr[index + (index / 2)];
      index = index / 2;
    }

  }

}

split(arrEx, targetEx);
//LOOKING AT INDEX position until the end and then do value of index

//Helper functions ----------------

// function less(indexNum, value, arr){
//   let b = Math.ceil(indexNum / 2);
//   return value = arr[b];
// }

// function more(){
//   let b = arr.length
//   let a = Math.ceil(a / 2);
// }

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
  expect(split(arr, value)).toStrictEqual(8);
});

