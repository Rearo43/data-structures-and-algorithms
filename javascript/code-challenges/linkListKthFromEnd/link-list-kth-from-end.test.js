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

  kthFromEnd(k) {
    if (!this.head) {
      return "Exception: Empty List.";
    } else if (isNaN(k)) {
      return "Exception: Needs to be a numeric value greater or equal to zero.";
    }

    let count = 0;
    let current = this.head;

    while (current.next) {
      count++;

      current = current.next;
    }

    let kth = count - k;

    current = this.head;
    count = 0;

    while (count < kth) {
      count++;

      current = current.next;
    }

    return current.value;
  }
}

/* TEST for link-list-kth-from-end.test.js below
------------------------------------------------------------------------------------------------ */
describe("Tests from link-list.test.js", () => {
  const newLinkList = new LinkedList();

  it("should insatiate", () => {
    expect(newLinkList).toBeDefined();
  });

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

  it("should insert before", () => {
    const list = new LinkedList();
    list.insert("AAA");
    list.insert("BBB");
    list.insert("CCC");

    expect(list.toString()).toBe("{ CCC } -> { BBB } -> { AAA } -> NULL");
  });
});

const newLinkList = new LinkedList();

it("should insert before", () => {
  newLinkList.insert("AAA");
  newLinkList.insert("BBB");
  newLinkList.insert("CCC");

  expect(newLinkList.toString()).toBe("{ CCC } -> { BBB } -> { AAA } -> NULL");
});

it("Find Kth from end", () => {
  expect(newLinkList.kthFromEnd(0)).toBe("AAA");
  expect(newLinkList.kthFromEnd(1)).toBe("BBB");
  expect(newLinkList.kthFromEnd(2)).toBe("CCC");
});

describe("Edge Cases: Empty list or not a number", () => {
  const newLinkList = new LinkedList();

  it("Empty list", () => {
    expect(newLinkList.toString()).toBe("NULL");
  });

  it("Empty list Kth to the end", () => {
    expect(newLinkList.kthFromEnd(0)).toBe("Exception: Empty List.");
  });

  it("K value not a number", () => {
    newLinkList.insert("AAA");
    newLinkList.insert("BBB");

    expect(newLinkList.kthFromEnd("r")).toBe(
      "Exception: Needs to be a numeric value greater or equal to zero."
    );
  });
});
