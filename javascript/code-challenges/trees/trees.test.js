'useStrict';

class Node {

  constructor(value, right=null, left=null){
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class BinaryTree {

  constructor(root=null){
    this.root = root;
  }

  preOrder(){
    const arr = [];
    function pre(root){

      if(!root){
        return;
      }

      arr.push(root.value);

      pre(root.left);
      pre(root.right);
    }
    pre(this.root);
    return arr;
  }

  inOrder(){
    const arr = [];

    function order(root){

      if(!root){
        return;
      }
      order(root.left);
      arr.push(root.value);

      order(root.right);
    }
    order(this.root);
    return arr;
  }

  postOrder(){
    const arr = [];
    function post(root){

      if(!root){
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

  add(value){
    const newNode = new Node(value);

    if (this.root === null){
      this.root = newNode;
    }

    else {
      let current = this.root;

      while(current){

        if (value < current.value){

          if (current.left === null){
            current.left = newNode;
            break;
          }

          else {
            current = current.left;
          }
        }

        if (value > current.value){

          if (current.right === null){
            current.right = newNode;
            break;
          }

          else {
            current = current.right;
          }
        }
      }
    }
  }

  contains(value){
    if(this.root === null){
      return null;
    }
    let current = this.root;
    let containsVal = false;

    while (current && !containsVal){
      if (value < current.value){
        current = current.left;
      } else if (value > current.value){
        current = current.right;
      } else {
        containsVal = true;
      }
    }
    if (!containsVal){
      return false;
    }
    return current;
  }
}

/* TEST for trees.test.js below
------------------------------------------------------------------------------------------------ */
const bbb = new Node('BBB');
const ccc = new Node('CCC');
const aaa = new Node('AAA', bbb, ccc);

it('instantiate', () =>{
  expect(BinarySearchTree).toBeDefined();
});


it('single node', () =>{
  const tree = new BinarySearchTree('root');

  expect(tree.root).toBe('root');
});


it('pre-order traversal', ()=>{
  const tree = new BinarySearchTree(aaa);

  expect(tree.preOrder()).toEqual([ 'AAA','CCC', 'BBB']);
});


it('in-order traversal', ()=>{
  const tree = new BinarySearchTree(aaa);

  expect(tree.inOrder()).toEqual([ 'CCC', 'AAA', 'BBB']);
});

it('post-order traversal', ()=>{
  const tree = new BinarySearchTree(aaa);

  expect(tree.postOrder()).toEqual([ 'CCC', 'BBB', 'AAA']);
});
