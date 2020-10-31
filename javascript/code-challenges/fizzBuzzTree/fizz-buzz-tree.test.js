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
    } else if (root.value % 3 === 0) {
      root.value = "Fizz";
    } else if (root.value % 5 === 0) {
      root.value = "Buzz";
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
const binaryTree = require("../trees/trees.test");

const fff = new Nodes(30);
const eee = new Nodes(34);
const ddd = new Nodes(43);
const ccc = new Nodes(15, fff);
const bbb = new Nodes(3, ddd, eee);
const aaa = new Nodes(5, bbb, ccc);

const tree = new binaryTree(aaa);

//          5
//    3          15
// 43  34       30

it("create tree", () => {
  expect(tree).toBeTruthy();
  expect(tree.root.value).toBe(5);
  // fizzBuzzTree(tree);
  console.log(tree.preOrder());
  expect(tree.preOrder()).toEqual([]);
});
