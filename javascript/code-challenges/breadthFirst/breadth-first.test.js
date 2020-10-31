/* eslint-disable quotes */
"use strict";

const BinaryTree = require("../trees/trees.test.js");
const { Queue } = require("../stackAndQueue/stack-and-queue.test.js");

class Nodes {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.leftChild = left;
    this.rightChild = right;
  }
}

class breadthFirst extends BinaryTree {
  constructor(root) {
    super(root);
  }

  breadthFirst(tree) {
    let newQueue = new Queue();
    const arr = [];

    if (!tree.root) {
      return "Empty Tree";
    }

    newQueue.enqueue(tree.root);

    while (!newQueue.isEmpty()) {
      let dequeue = newQueue.dequeue();

      arr.push(dequeue.value);

      if (dequeue.leftChild) {
        newQueue.enqueue(dequeue.leftChild);
      }
      if (dequeue.rightChild) {
        newQueue.enqueue(dequeue.rightChild);
      }
    }
    return arr;
  }
}

/* TEST for breadth-first.test.js below
------------------------------------------------------------------------------------------------ */
const eee = new Nodes("EEE");
const ddd = new Nodes("DDD", eee);
const ccc = new Nodes("CCC");
const bbb = new Nodes("BBB", ddd);
const aaa = new Nodes("AAA", bbb, ccc);

const tree = new breadthFirst(aaa);
const treeTwo = new breadthFirst();

it("tree built, with root of AAA", () => {
  expect(tree).toBeTruthy();
  expect(tree.root.value).toStrictEqual("AAA");
});

it("breadth first on empty tree", () => {
  expect(treeTwo.breadthFirst(treeTwo)).toStrictEqual("Empty Tree");
});

it("breadth first", () => {
  expect(tree.breadthFirst(tree)).toStrictEqual([
    "AAA",
    "BBB",
    "CCC",
    "DDD",
    "EEE",
  ]);
});
