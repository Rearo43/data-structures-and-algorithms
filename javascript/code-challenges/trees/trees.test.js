'useStrict';

class Nodes {

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

      pre(root.right);
      pre(root.left);
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

  constructor(root) {
    super(root);
  }

  add(value) {
    const newNode = new Nodes(value);
    let current = this.root;

    if (!this.root){
      this.root = newNode;
      return;
    }

    while(value < current.left) {

      if(!current.left) {
        current.left = newNode;
        break;
      }

      else{
        current = current.left;
      }
    }

    while(value > current.right) {
      if(!current.right) {
        current.right = newNode;
        break;
      }

      else{
        current = current.right;
      }
    }
  }

  contains(value){
    let node = this.root;
    let contain = false;

    if(!this.root){
      return null;
    }

    while (value < node.value){
      
      if (node.left){
        node = node.left;
      }

      else {
        return false;
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
const bbb = new Nodes('BBB');
const ccc = new Nodes('CCC');
const aaa = new Nodes('AAA', bbb, ccc);

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

xit('add node plus left side', () =>{
  tree.add(2);

  expect(tree.root.value).toStrictEqual(43);
  expect(tree.root.left.value).toStrictEqual(2);
  expect(tree.root.right).toBeNull;
});


xit('add right side', () =>{
  tree.add(50);

  expect(tree.root.right.value).toStrictEqual(50);
  expect(tree.root.left.value).toStrictEqual(2);
});
