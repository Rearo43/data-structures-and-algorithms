/* eslint-disable quotes */
"use strict";

class Nodes {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.end = null;
  }

  enqueue(value) {
    if (!this.front) {
      this.front = new Nodes(value);
      this.end = this.front;
    } else {
      this.end.next = new Nodes(value);
      this.end = this.end.next;
    }
  }

  dequeue() {
    if (!this.front) {
      return "Empty Queue (dequeue).";
    }

    let holdFront = this.front;

    this.front = this.front.next;
    holdFront.next = null;

    return holdFront.value;
  }

  peek() {
    if (!this.front) {
      return "Empty Queue (peek).";
    }

    return this.front.value;
  }

  isEmpty() {
    if (!this.front) {
      return true;
    } else {
      return false;
    }
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    this.top = new Nodes(value, this.top);
  }

  pop() {
    if (!this.top) {
      return "Empty Stack (pop).";
    }

    let holdTop = this.top;

    this.top = this.top.next;
    holdTop.next = null;

    return holdTop.value;
  }

  peek() {
    if (!this.top) {
      return "Empty Stack (peek).";
    }

    return this.top.value;
  }

  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}

/* TEST for stack-and-queue.js below
------------------------------------------------------------------------------------------------ */
describe("QUEUE Class method tests", () => {
  const queue = new Queue();

  it("isEmpty, true", () => {
    expect(queue.isEmpty()).toStrictEqual(true);
  });

  it("isEmpty, false / enqueue working", () => {
    queue.enqueue("AAA");
    queue.enqueue("BBB");
    queue.enqueue("CCC");
    queue.enqueue("DDD");
    queue.enqueue("EEE");
    queue.enqueue("FFF");

    expect(queue.front.value).toStrictEqual("AAA");

    expect(queue.isEmpty()).toStrictEqual(false);
  });

  it("peek and check end value", () => {
    expect(queue.peek()).toStrictEqual("AAA");
    expect(queue.end.value).toStrictEqual("FFF");
  });

  it("dequeue", () => {
    expect(queue.dequeue()).toStrictEqual("AAA");
    expect(queue.isEmpty()).toStrictEqual(false);
  });
});

describe("STACK Class method tests", () => {
  const stack = new Stack();

  it("isEmpty, true", () => {
    expect(stack.isEmpty()).toStrictEqual(true);
  });

  it("isEmpty, false / push working", () => {
    stack.push("FFF");
    stack.push("EEE");
    stack.push("DDD");
    stack.push("CCC");
    stack.push("BBB");
    stack.push("AAA");

    expect(stack.top.value).toStrictEqual("AAA");

    expect(stack.isEmpty()).toStrictEqual(false);
  });

  it("peek / check to make sure node peeked is still part of stack", () => {
    expect(stack.peek()).toStrictEqual("AAA");
    expect(stack.top.value).toStrictEqual("AAA");
  });

  it("pop / make sure the node popped in no longer the top (part) of the stack", () => {
    expect(stack.pop()).toStrictEqual("AAA");
    expect(stack.top.value).toStrictEqual("BBB");
  });
});

describe("Exceptions: Queues and Stacks", () => {
  const stack = new Stack();
  const queue = new Queue();

  it("Queue.dequeue", () => {
    expect(queue.dequeue()).toStrictEqual("Empty Queue (dequeue).");
  });

  it("Queue.peek", () => {
    expect(queue.peek()).toStrictEqual("Empty Queue (peek).");
  });

  it("Stack.pop", () => {
    expect(stack.pop()).toStrictEqual("Empty Stack (pop).");
  });

  it("Stack.peek", () => {
    expect(stack.peek()).toStrictEqual("Empty Stack (peek).");
  });
});
