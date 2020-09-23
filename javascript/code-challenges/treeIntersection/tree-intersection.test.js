
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

//   preOrder() {

//     const output = [];

//     function _preOrder(root){
//       if(!root){
//         return;
//       }
//       output.push(root.value);
//       _preOrder(root.left);
//       _preOrder(root.right);
//     }

//     _preOrder(this.root);
//     return output;

//   }

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

//   postOrder() {

//     const output = [];

//     function _postOrder(root){
//       if(!root){
//         return;
//       }
//       _postOrder(root.left);
//       _postOrder(root.right);
//       output.push(root.value);
//     }

//     _postOrder(this.root);
//     return output;

//   }

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
