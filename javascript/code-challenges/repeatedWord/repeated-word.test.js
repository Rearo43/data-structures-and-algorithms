'use strict';

function repeatedWordFirstAppearance(str) {
  let regex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  let newStr = (str.replace(regex, '')).toUpperCase();
  let split = newStr.split(' ');

  if(!str) {
    return null;
  }

  for(let i = 0; i < split.length; i++) {
    let word = split[i];

    for(let j = i + 1; j < split.length; j++) {
      let wordCompare = split[j];

      if(word === wordCompare) {
        return (`Repeating Word: ${word}, Length of String: ${split.length}`);
      }
    }
  }
}
// ---------------------------Second Solution---------------------------
function repeatedWord(str) {
  let regex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  let newStr = (str.replace(regex, '')).toUpperCase();
  let split = newStr.split(' ');

  if(!str) {
    return null;
  }

  for(let i = 0; i < split.length; i++) {
    let wordToCompare = split.slice(i, i + 1);
    let arrComparedTo = split.slice(0, i);

    for(let j = 0; j < arrComparedTo.length; j++) {

      if(wordToCompare[0] === arrComparedTo[j]) {
        return (`Repeating Word: ${wordToCompare[0]}, Length of String: ${split.length}`);
      }
    }
  }
}


/* TEST for merge-sort.test.js below
------------------------------------------------------------------------------------------------ */
let strOne = 'Once upon a time, there was a brave princess who...';
let strTwo = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
let strThree = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

console.log(repeatedWord(strOne));

it('should return the first word eligible of a repeat in a string', () => {
  expect(repeatedWordFirstAppearance(strOne)).toStrictEqual(`Repeating Word: A, Length of String: 10`);
  expect(repeatedWordFirstAppearance(strTwo)).toStrictEqual(`Repeating Word: IT, Length of String: 120`);
  expect(repeatedWordFirstAppearance(strThree)).toStrictEqual(`Repeating Word: WAS, Length of String: 23`);
});

it('should return the first word eligible of a repeat in a string', () => {
  expect(repeatedWord(strOne)).toStrictEqual(`Repeating Word: A, Length of String: 10`);
  expect(repeatedWord(strTwo)).toStrictEqual(`Repeating Word: IT, Length of String: 120`);
  expect(repeatedWord(strThree)).toStrictEqual(`Repeating Word: SUMMER, Length of String: 23`);
});

