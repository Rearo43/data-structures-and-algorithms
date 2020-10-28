/* eslint-disable quotes */
"use strict";

function zip(llOne, llTwo) {
  let llOne_Current = llOne.head;
  let llTwo_Current = llTwo.head;

  if (!llOne.head && !llTwo.head) {
    return "Both linked lists are empty (nothing to zip)";
  } else if (!llOne.head || !llTwo.head) {
    return !llOne.head ? llTwo : llOne;
  } else if (!llOne_Current.next && !llTwo_Current.next) {
    llOne_Current.next = llTwo_Current;

    return llOne.head;
  }

  while (llOne_Current && llTwo_Current) {
    let one_Next = llOne_Current.next;

    llOne_Current.next = llTwo_Current;
    llTwo_Current.next = one_Next;
  }

  return llOne.head;
}

/* TEST for ll-zip.test.js below
------------------------------------------------------------------------------------------------ */
const LinkedList = require("../linkedLists/linked-list.test.js");

const A = new LinkedList();
const B = new LinkedList();

it("linked lists zipped (one node in each)", () => {
  expect(zip(A, B)).toStrictEqual(
    "Both linked lists are empty (nothing to zip)"
  );
});

const ONE = new LinkedList();
ONE.insert("AAA");

const TWO = new LinkedList();
TWO.insert("111");

it("linked lists zipped (one node in each)", () => {
  zip(ONE, TWO);

  expect(ONE.toString()).toStrictEqual("{ AAA } -> { 111 } -> NULL");
});

const THREE = new LinkedList();
THREE.insert("333");
THREE.insert("222");
THREE.insert("111");

const FOUR = new LinkedList();
FOUR.insert("CCC");
FOUR.insert("BBB");
FOUR.insert("AAA");

it("three nodes in each", () => {
  zip(THREE, FOUR);

  expect(THREE.toString()).toStrictEqual(
    "{ 111 } -> { AAA } -> { 222 } -> { BBB } -> { 333 } -> { CCC } -> NULL"
  );
});

const FIVE = new LinkedList();
FIVE.insert("333");
FIVE.insert("222");
FIVE.insert("111");

const SIX = new LinkedList();

it("uneven three nodes in first, zero in second", () => {
  zip(FIVE, SIX);

  expect(FIVE.toString()).toStrictEqual(
    "{ 111 } -> { 222 } -> { 333 } -> NULL"
  );
});
