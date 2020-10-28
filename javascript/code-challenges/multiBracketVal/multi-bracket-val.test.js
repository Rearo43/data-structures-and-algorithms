'use strict';

function brackets(str) {
  let curl = 0; //1
  let square = 0; //1
  let circle = 0; //1

  if (!str) {
    //1
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    //7 steps x string length aka N
    let place = str[i]; // Always one var

    if (place === '{') {
      curl++;
    }
    if (place === '[') {
      square++;
    }
    if (place === '(') {
      circle++;
    }
    if (place === '}') {
      curl--;
    }
    if (place === ']') {
      square--;
    }
    if (place === ')') {
      circle--;
    }
  }

  if (curl === 0 && square === 0 && circle === 0) {
    return true;
  } else {
    return false;
  }
}

/* TEST for linked-list.test.js below
------------------------------------------------------------------------------------------------ */
it('Should return true if all have a counterpart return false for everything else', () => {
  // let str = '{}{Code}[Fellows](())';
  // let str1 = '{}{Code}[Fellows](())(](';
  let str2 = '{}{Code}[Fellows](())(](((((({{{{}}{{{))';
  // let str3 = '[]';
  // let str4 = '';

  // expect(brackets(str)).toStrictEqual(true);
  // expect(brackets(str1)).toStrictEqual(false);
  expect(brackets(str2)).toStrictEqual(false);
  // expect(brackets(str3)).toStrictEqual(true);
  // expect(brackets(str4)).toStrictEqual(false);
});
