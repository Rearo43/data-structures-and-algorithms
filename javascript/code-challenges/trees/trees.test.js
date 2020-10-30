/* eslint-disable quotes */
"useStrict";

class Nodes {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
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
}



/* TEST for trees.test.js below
------------------------------------------------------------------------------------------------ */
const fff = new Nodes("FFF");
const eee = new Nodes("EEE");
const ddd = new Nodes("DDD");
const ccc = new Nodes("CCC", fff);
const bbb = new Nodes("BBB", ddd, eee);
const aaa = new Nodes("AAA", bbb, ccc);

const tree = new BinaryTree(aaa);

//          AAA
//    BBB          CCC
// DDD  EEE       FFF

it("single node", () => {
  expect(tree.root.value).toStrictEqual("AAA");
});

it("pre-order", () => {
  expect(tree.preOrder()).toStrictEqual([
    "AAA",
    "BBB",
    "DDD",
    "EEE",
    "CCC",
    "FFF",
  ]);
});

it("in-order", () => {
  expect(tree.inOrder()).toStrictEqual([
    "DDD",
    "BBB",
    "EEE",
    "AAA",
    "FFF",
    "CCC",
  ]);
});

it("post-order traversal", () => {
  expect(tree.postOrder()).toEqual(["DDD", "EEE", "BBB", "FFF", "CCC", "AAA"]);
});

// const tree = new BinarySearchTree(aaa);

// xit('add node plus left side', () =>{
//   tree.add(2);

//   expect(tree.root.value).toStrictEqual(43);
//   expect(tree.root.left.value).toStrictEqual(2);
//   expect(tree.root.right).toBeNull;
// });

// xit('add right side', () =>{
//   tree.add(50);

//   expect(tree.root.right.value).toStrictEqual(50);
//   expect(tree.root.left.value).toStrictEqual(2);
// });
