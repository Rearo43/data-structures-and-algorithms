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

  toString() {
    let str = '';
    let current = this.head;

    while (current) {
      str += `{ ${current.value} } -> `;

      current = current.next;
    }

    return str + 'NULL';
  }

  includes(value) {
    let headNode = this.head;

    if(headNode.value === value){
      return true;
    }

    while(headNode.value !== null){
      headNode = headNode.next;

      if(headNode === value){

        return true;
      }

      return false;
    }
  }
}


/* TEST for linked-list-insert.test.js below
------------------------------------------------------------------------------------------------ */
describe('Tests from link-list.test.js', () => {
  const newLinkList = new LinkedList();

  it('should insatiate', () => {
    expect(newLinkList).toBeDefined();
  });


  it('Add to empty list', () => {
    newLinkList.insert('AAA');

    expect(newLinkList.head.value).toStrictEqual('AAA');
  });


  it('Insert multiple Nodes, while keeping previous Nodes (Head should change)', () => {
    newLinkList.insert('AAA');
    newLinkList.insert('BBB');
    newLinkList.insert('CCC');

    expect(newLinkList.head.value).toStrictEqual('CCC');
    expect(newLinkList.head.next.next.value).toStrictEqual('AAA');
  });


  it('should insert before', () => {
    const list = new LinkedList();
    list.insert('AAA');
    list.insert('BBB');
    list.insert('CCC');

    expect(list.toString()).toBe('{ CCC } -> { BBB } -> { AAA } -> NULL');
  });


  it('should return true or false if the value is in the list', () => {
    expect(newLinkList.includes('CCC')).toStrictEqual(true);
    expect(newLinkList.includes('DDD')).toStrictEqual(false);
  });
});


it('Add to end of empty list', () => {
  const newLinkList = new LinkedList();

  newLinkList.append('AAA');

  expect(newLinkList.head.value).toStrictEqual('AAA');
});


// it('Add to end of list with preexisting Nodes', () => {
//   const newLinkList = new LinkedList();
//   newLinkList.insert('AAA');
//   newLinkList.insert('BBB');

//   newLinkList.append('CCC');

//   expect(newLinkList.head.value).toStrictEqual('BBB');
//   expect(newLinkList.head.next.value).toStrictEqual('AAA');

//   expect(newLinkList.head.next.next.value).toStrictEqual('CCC');
//   expect(newLinkList.head.next.next.next).toBe(null);
// });
