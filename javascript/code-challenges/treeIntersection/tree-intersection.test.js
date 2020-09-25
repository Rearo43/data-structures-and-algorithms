
'use strict';

class Node {
  constructor(value, left=null, right=null){
    this.value = value;
    this.left =left;
    this.right = right;
  }
}

class BinaryTree {

  constructor(root = null){
    this.root = root;
  }

  inOrder() {

    const output = [];

    function _inOrder(root){
      if(!root){
        return;
      }
      _inOrder(root.left);
      output.push(root.value);
      _inOrder(root.right);
    }

    _inOrder(this.root);
    return output;


  }

  inOrderAlt() {

    const output = [];

    function _inOrder(root){
      if(!root){
        return;
      }
      _inOrder(root.left);

      for(let i = 0; i < )
      output.push(root.value);
      _inOrder(root.right);
    }

    _inOrder(this.root);
    return output;


  }
}

function treeIntersec(treeOne, treeTwo) {
    let treeOneArr = treeOne.inOrder;
    const output = [];

    function _inOrderAlt(root){
      if(!root){
        return;
      }
      _inOrderAlt(root.left);

      for(let i = 0; i < treeOneArr.length; i++) {

          if(root.value === treeOneArr[i]) {
              output.push(root.value);
          }
      }
      _inOrderAlt(root.right);
    }

    _inOrderAlt(this.root);
    return output;


}


/* TEST for merge-sort.test.js below
------------------------------------------------------------------------------------------------ */
const six = new Node (6);
const five = new Node (5);
const four = new Node (4);
const three = new Node (3, six);
const two = new Node (2, four, five);
const one = new Node (1, two, three);


it ('should return numbers inOrder', () => {
  const tree = new BinaryTree(one);

  expect(tree.root.value).toBe(1);
  expect(tree.inOrder()).toStrictEqual([4 , 2, 5, 1, 6, 3]);
});
