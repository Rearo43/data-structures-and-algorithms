/* eslint-disable quotes */
"use strict";

class PseudoQueue {
  constructor() {
    this.One = new Stack();
    this.Two = new Stack();
  }

  enqueue(value) {
    this.One.push(value);
  }

  dequeue() {
    if (!this.One.top) {
      return "Empty PseudoQueue (dequeue).";
    }

    let current = this.One.top;
    while (current) {
      current = current.next;
      this.Two.push(this.One.pop());
    }

    let node_dequeued = this.Two.pop();

    current = this.Two.top;
    while (current) {
      current = current.next;
      this.One.push(this.Two.pop());
    }

    return node_dequeued;
  }
}

/* TEST for pseudo-queue.test.js below
------------------------------------------------------------------------------------------------ */
const Stack = require("../stackAndQueue/stack-and-queue.test.js");
const PQ = new PseudoQueue();

it("empty PseudoQueue return message", () => {
  expect(PQ.dequeue()).toBe("Empty PseudoQueue (dequeue).");
});

it("enqueue multiple and peek", () => {
  PQ.enqueue("AAA");
  PQ.enqueue("BBB");
  PQ.enqueue("CCC");
  PQ.enqueue("DDD");
  PQ.enqueue("EEE");
  expect(PQ.One.peek()).toBe("EEE");
});

it("dequeue", () => {
  expect(PQ.dequeue()).toBe("AAA");
});
