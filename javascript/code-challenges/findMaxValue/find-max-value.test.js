/* eslint-disable quotes */
"use strict";

class Nodes {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    const arr = [];
    function pre(root) {
      if (!root) {
        return;
      }

      arr.push(root.value);

      pre(root.left);
      pre(root.right);
    }
    pre(this.root);
    return arr;
  }

  inOrder() {
    const arr = [];

    function order(root) {
      if (!root) {
        return;
      }
      order(root.left);
      arr.push(root.value);

      order(root.right);
    }
    order(this.root);
    return arr;
  }

  postOrder() {
    const arr = [];
    function post(root) {
      if (!root) {
        return;
      }

      post(root.left);
      post(root.right);
      arr.push(root.value);
    }

    post(this.root);
    return arr;
  }

  maxVal() {
    let capMaxVal = this.root.value;

    if (!this.root) {
      return null;
    }

    function max(root) {
      if (!root) {
        return;
      }

      if (root.value > capMaxVal) {
        capMaxVal = root.value;
      }

      max(root.left);
      max(root.right);
    }

    max(this.root);

    return capMaxVal;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    const newNode = new Nodes(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;

      while (current) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            break;
          } else {
            current = current.left;
          }
        }

        if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            break;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  contains(value) {
    let node = this.root;
    let contain = false;

    if (this.root === null) {
      return null;
    }

    while (node && !contain) {
      if (value < node.value) {
        node = node.left;
      }

      if (value > node.value) {
        node = node.right;
      } else {
        contain = true;
      }
    }

    if (!contain) {
      return false;
    }

    return node;
  }
}

/* TEST for find-max-value.test.js below
------------------------------------------------------------------------------------------------ */
const second = new Nodes(43);
const third = new Nodes(50);
const tree = new BinarySearchTree(new Nodes(2, second, third));

const fourth = new Nodes(430);
const fifth = new Nodes(200);
const treeTwo = new BinarySearchTree(new Nodes(17, fourth, fifth));

it("Can successfully find the largest value in a tree", () => {
  expect(tree.maxVal()).toEqual(50);
  //   expect(treeTwo.maxVal()).toEqual(430);
});

it("empty tree equal null", () => {
  const tree = new BinarySearchTree();
  expect(tree.maxVal()).toBeNull;
});
