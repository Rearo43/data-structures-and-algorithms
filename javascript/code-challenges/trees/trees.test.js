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
    let node = this.root;
    let contain = false;

    if(this.root === null){
      return null;
    }

    while (node && !contain){
      if (value < node.value){
        node = node.left;
      }

      if (value > node.value){
        node = node.right;
      }

      else {
        contain = true;
      }
    }

    if (!contain){
      return false;
    }

    return node;
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

const tree = new BinarySearchTree(aaa);

it('add node plus left side', () =>{
  tree.add(2);

  expect(tree.root.value).toStrictEqual(43);
  expect(tree.root.left.value).toStrictEqual(2);
  expect(tree.root.right).toBeNull;
});


it('add right side', () =>{
  tree.add(50);

  expect(tree.root.right.value).toStrictEqual(50);
  expect(tree.root.left.value).toStrictEqual(2);
});


it('should build from array', () =>{
  const arr = [10, 5,15,3,7,12,17];
  const tree = new BinarySearchTree();
  tree.fromArray(arr);
  expect(tree.inOrder()).toBe([3,5,7,10,12,15,17]);

});
