/* eslint-disable quotes */
"use strict";

function joinLeft(obj1, obj2) {
  let returnArray = Object.entries(obj1);

  returnArray.forEach((array) => {
    let key = array[0];

    if (obj2[key]) {
      array.push(obj2[key]);
    } else {
      array.push(null);
    }
  });

  return returnArray;
}

/* TEST for merge-sort.test.js below
------------------------------------------------------------------------------------------------ */
let synonym = {
  fond: "enamored",
  wrath: "anger",
  diligent: "employed",
  outfit: "garb",
  guide: "usher",
};

let antonym = {
  fond: "averse",
  wrath: "delight",
  diligent: "idle",
  guide: "follow",
  flow: "jam",
};

let similar = {
  fond: "adoring",
  wrath: "rage",
  diligent: "industrious",
  guide: "conductor",
  flow: "movement",
  outfit: "costume",
  incompetent: "unskilled",
};

it("should return one data set made of synonym, and antonym", () => {
  expect(joinLeft(synonym, antonym)).toStrictEqual([
    ["fond", "enamored", "averse"],
    ["wrath", "anger", "delight"],
    ["diligent", "employed", "idle"],
    ["outfit", "garb", null],
    ["guide", "usher", "follow"],
  ]);
});

it("should return one data set made of similar, and antonym", () => {
  expect(joinLeft(similar, antonym)).toStrictEqual([
    ["fond", "adoring", "averse"],
    ["wrath", "rage", "delight"],
    ["diligent", "industrious", "idle"],
    ["guide", "conductor", "follow"],
    ["flow", "movement", "jam"],
    ["outfit", "costume", null],
    ["incompetent", "unskilled", null],
  ]);
});

it("should return one data set made of synonym, and similar", () => {
  expect(joinLeft(synonym, similar)).toStrictEqual([
    ["fond", "enamored", "adoring"],
    ["wrath", "anger", "rage"],
    ["diligent", "employed", "industrious"],
    ["outfit", "garb", "costume"],
    ["guide", "usher", "conductor"],
  ]);
});
