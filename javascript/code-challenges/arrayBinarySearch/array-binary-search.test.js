'use strict';



const array = (arr, value) => {
  const findIndex = Math.ceil((arr.length / 2)-1);
  let middle = arr[findIndex];
  // console.log(middle);

  if(value > middle){
    console.log('more');
  }

  if(value < middle){
    // console.log('less');
    // console.log(middle);
    let newArr = findIndex / 2;
    console.log(newArr);
  }
  // console.log(middle);
};

function split(start, mid){
  let newArr = mid / 2;
  if()
}

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
  expect(array(arr, value)).toStrictEqual(2);
});
