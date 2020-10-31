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

class BinarySearchTree extends BinaryTree {
  constructor(root) {
    super(root);
  }

  add(value) {
    const newNode = new Nodes(value);
    let current = this.root;

    if (!this.root) {
      this.root = newNode;
      return;
    }

    while (value < current.value) {
      if (!current.left) {
        current.left = newNode;
        break;
      } else {
        current = current.left;
      }
    }

    while (value > current.value) {
      if (!current.right) {
        current.right = newNode;
        break;
      } else {
        current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;
    // let contain = false;

    if (!current) {
      return false;
    }

    while (value < current.value) {
      if (current.left) {
        current = current.left;
      } else {
        return false;
      }
    }

    while (value > current.value) {
      if (current.right) {
        current = current.right;
      } else {
        return false;
      }
    }

    if (value === current.value) {
      return true;
    }
  }
}

module.exports = BinaryTree;

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

const searchTree = new BinarySearchTree();

it("add nodes", () => {
  searchTree.add(43);
  searchTree.add(12);
  searchTree.add(10);

  expect(searchTree.root.value).toStrictEqual(43);
  expect(searchTree.root.left.value).toStrictEqual(12);
  expect(searchTree.root.left.left.value).toStrictEqual(10);
  expect(searchTree.root.right).toBeNull;
});

it("contains, false", () => {
  expect(searchTree.contains(34)).toStrictEqual(false);
});

it("contains, true", () => {
  expect(searchTree.contains(43)).toStrictEqual(true);
  expect(searchTree.contains(10)).toStrictEqual(true);
});
