'use strict';

function zip(llOne, llTwo) {
  if(!llOne || !llTwo) {
    if(!llOne && llTwo) {
      return llTwo;
    } else if(!llTwo && llOne) {
      return llOne;
    } else {
      return 'Both Link Lists Empty';
    }
  } else {
      let one = list.head;
      let two = list.head;

      while(one && two) {
          let 
      }
  }
}

function llThree(llOne, llTwo) {
    let three = new LinkedList();
    let end = three

    while(llOne || llTwo) {
        if(llOne !== null) {
            end.val += llOne.val
        }
        if(llTwo !== null) {
            end.val += llTwo.val
        }

        end.next =
    }
}