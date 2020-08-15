'use strict';

class Nodes {
  buildCon(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  buildCon() {
    this.head = null;
  }

  insert(value) {
    this.head = new Nodes(value, this.head);
  }

  append(value) {
    const newNode = new Node(value);

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

  expect(newLinkList.head.value).toBe('AAA');
});

it('Change head of list, while keeping all Nodes', () => {
  const newLinkList = new LinkedList();

  newLinkList.insert('AAA');
  newLinkList.insert('BBB');

  expect(newLinkList.head.value).toBe('BBB');
  expect(newLinkList.head.next.value).toBe('AAA');
});

it('Add to end of empty list', () => {
  const newLinkList = new LinkedList();
  newLinkList.append('AAA');
  expect(newLinkList.head.value).toBe('AAA');
});

it('Add to end of list with preexisting Nodes', () => {
  const newLinkList = new LinkedList();
  newLinkList.insert('AAA');
  newLinkList.insert('BBB');

  newLinkList.append('CCC');

  expect(newLinkList.head.value).toBe('BBB');
  expect(newLinkList.head.next.value).toBe('AAA');

  expect(newLinkList.head.next.next.value).toBe('CCC');
  expect(newLinkList.head.next.next.next).toBe(null);


});


