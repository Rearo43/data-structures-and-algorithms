/* eslint-disable quotes */
"use strict";

class Nodes {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function fizzBuzzTree(node) {
  if (!node.root) {
    return;
  }

  function divide(root) {
    if (!root) {
      return;
    }

    if (root.value % 3 === 0 && root.value % 5 === 0) {
      root.value = "FizzBuzz";
    }

    if (root.value % 5 === 0) {
      root.value = "Buzz";
    }

    if (root.value % 3 === 0) {
      root.value = "Fizz";
    } else {
      root.value = root.value.toString();
    }
    divide(root.rightChild);
    divide(root.leftChild);
  }

  divide(node.root);
}

/* TEST for fizz-buzz-tree.test.js below
------------------------------------------------------------------------------------------------ */
