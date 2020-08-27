function brackets(str){
  let curl = 0;
  let square = 0;
  let circle = 0;

  if(!str) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    let place = str[i];

    if (place === '{') {curl++;}
    if (place === '[') {square++;}
    if (place === '(') {circle++;}
    if (place === '}') {curl--;}
    if (place === ']') {square--;}
    if (place === ')') {circle--;}
  }

  if(curl === 0 && square === 0 && circle === 0){
    return true;
  }else {
    return false;
  }
}


/* TEST for linked-list.test.js below
------------------------------------------------------------------------------------------------ */
it('Should return true if all have a counterpart return false for everything else', () => {
  let str = '{}{Code}[Fellows](())';
  let str1 = '{}{Code}[Fellows](())(](';
  let str2 = '{}{Code}[Fellows](())(](((((({{{{}}{{{))';
  let str3 = '[]';
  let str4 = '';

  expect(brackets(str)).toStrictEqual(true);
  expect(brackets(str1)).toStrictEqual(false);
  expect(brackets(str2)).toStrictEqual(false);
  expect(brackets(str3)).toStrictEqual(true);
  expect(brackets(str4)).toStrictEqual(false);
});
