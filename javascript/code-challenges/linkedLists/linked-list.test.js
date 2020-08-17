'use strict';

class Nodes {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Nodes(value, this.head);
  }

  append(value) {
    const newNode = new Nodes(value);

    if(!this.head){
      this.head = newNode;
      return;
    }

    let thisNode = this.head;

    while(thisNode.next){
      thisNode = thisNode.next;
    }

    thisNode.next = newNode;
  }
}


/* TEST for array-shift.test.js below
------------------------------------------------------------------------------------------------ */

it('should insantiate', () => {
  const newLinkList = new LinkedList();
  expect(newLinkList).toBeDefined();
});

it('Add to empty list', () => {
  const newLinkList = new LinkedList();

  newLinkList.insert('AAA');

  expect(newLinkList.head.value).toStrictEqual('AAA');
});

it('Change head of list, while keeping all Nodes', () => {
  const newLinkList = new LinkedList();

  newLinkList.insert('AAA');
  newLinkList.insert('BBB');

  expect(newLinkList.head.value).toStrictEqual('BBB');
  expect(newLinkList.head.next.value).toStrictEqual('AAA');
});

it('Add to end of empty list', () => {
  const newLinkList = new LinkedList();
  newLinkList.append('AAA');
  expect(newLinkList.head.value).toStrictEqual('AAA');
});

it('Add to end of list with preexisting Nodes', () => {
  const newLinkList = new LinkedList();
  newLinkList.insert('AAA');
  newLinkList.insert('BBB');

  newLinkList.append('CCC');

  expect(newLinkList.head.value).toStrictEqual('BBB');
  expect(newLinkList.head.next.value).toStrictEqual('AAA');

  expect(newLinkList.head.next.next.value).toStrictEqual('CCC');
  expect(newLinkList.head.next.next.next).toBe(null);


});


