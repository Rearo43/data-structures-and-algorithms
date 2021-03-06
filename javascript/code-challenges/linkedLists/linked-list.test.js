/* eslint-disable quotes */
"use strict";

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
    let str = "";
    let current = this.head;

    while (current) {
      str += `{ ${current.value} } -> `;

      current = current.next;
    }

    return str + "NULL";
  }

  includes(value) {
    let headNode = this.head;

    if (headNode.value === value) {
      return true;
    }

    while (headNode.next !== null) {
      headNode = headNode.next;

      if (headNode.value === value) {
        return true;
      }
    }
    return false;
  }
}

module.exports = LinkedList;

/* TEST for linked-list.test.js below
------------------------------------------------------------------------------------------------ */
const newLinkList = new LinkedList();

it("Add to empty list", () => {
  newLinkList.insert("AAA");

  expect(newLinkList.head.value).toStrictEqual("AAA");
});

it("Insert multiple Nodes, while keeping previous Nodes (Head should change)", () => {
  newLinkList.insert("AAA");
  newLinkList.insert("BBB");
  newLinkList.insert("CCC");

  expect(newLinkList.head.value).toStrictEqual("CCC");
  expect(newLinkList.head.next.next.value).toStrictEqual("AAA");
});

const list = new LinkedList();

it("should insert before", () => {
  list.insert("AAA");
  list.insert("BBB");
  list.insert("CCC");

  expect(list.toString()).toStrictEqual(
    "{ CCC } -> { BBB } -> { AAA } -> NULL"
  );
});

it("should return true or false if the value is in the list", () => {
  expect(list.includes("CCC")).toStrictEqual(true);
  expect(list.includes("BBB")).toStrictEqual(true);
  expect(list.includes("DDD")).toStrictEqual(false);
});
