'use strict';

function repeatedWord(str) {
  let split = str.split(' ');

  for(let i = 0; i < split.length; i++) {
    let word = split[i].toLowerCase();

    for(let j = i + 1; j < split.length; j++) {
      let wordCompare = split[j].toLowerCase();

      if(word === wordCompare) {
        return (`Repeating word: ${word}, Length of string: ${split.length}`);
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
console.log(repeatedWord(strTwo));
console.log(repeatedWord(strThree));

it('should return the first word eligible of a repeat in a string', () => {
  repeatedWord(strOne);

  expect(repeatedWord(strOne)).toStrictlyEqual('a');
});

