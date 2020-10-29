/* eslint-disable quotes */
"use strict";

class Pet {
  constructor(animal, name, next = null) {
    this.pet = animal;
    this.name = name;
    this.next = next;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }

  toString() {
    let str = "";
    let current = this.front;

    while (current) {
      str += `{ Type: ${current.pet}, Name: ${current.name} } -> `;

      current = current.next;
    }

    return "FRONT -> " + str + "BACK";
  }

  enqueue(animal) {
    if (animal.pet !== "Dog" && animal.pet !== "Cat") {
      return "Only accept 'Dogs' or 'Cats'.";
    }

    if (!this.front) {
      this.front = animal;
      this.back = this.front;
    } else {
      this.back.next = animal;
      this.back = this.back.next;
    }
  }

  dequeue(pref) {
    let current = this.front;

    if (!this.front) {
      return "EMPTY SHELTER YAY!!";
    }
    if (pref !== "Dog" && pref !== "Cat") {
      return null;
    }
    if (pref === current.pet) {
      let chosen = current.name;

      this.front = current.next;
      current.next = null;

      return chosen;
    }

    while (pref !== current.pet) {
      if (pref === current.next.pet) {
        let chosen = current.next.name;

        current.next = current.next.next || null;

        return chosen;
      }
    }
  }
}

/* TEST for animal-shelter.test.js below
------------------------------------------------------------------------------------------------ */
const shelterOne = new AnimalShelter();
const Laina = new Pet("Cat", "Laina");
const Ronnie = new Pet("Cat", "Ronnie");
const Khai = new Pet("Dog", "Khai");

const shelterTwo = new AnimalShelter();
const Max = new Pet("Chinchilla", "Max");

const shelterThree = new AnimalShelter();
const Wicket = new Pet("Dog", "Wicket");
const Koda = new Pet("Dog", "Koda");
const Tyler = new Pet("Cat", "Tyler");
const AAA = new Pet("Dog", "AAA");
const BBB = new Pet("Cat", "BBB");
const CCC = new Pet("Cat", "CCC");
const DDD = new Pet("Dog", "DDD");

it("create shelter list", () => {
  shelterOne.enqueue(Laina);
  shelterOne.enqueue(Khai);
  shelterOne.enqueue(Ronnie);

  expect(shelterOne.toString()).toStrictEqual(
    "FRONT -> { Type: Cat, Name: Laina } -> { Type: Dog, Name: Khai } -> { Type: Cat, Name: Ronnie } -> BACK"
  );
});

it("enqueue a chinchilla", () => {
  expect(shelterTwo.enqueue(Max)).toStrictEqual(
    "Only accept 'Dogs' or 'Cats'."
  );
});

it("dequeue from empty shelter", () => {
  expect(shelterTwo.dequeue("chinchilla")).toStrictEqual("EMPTY SHELTER YAY!!");
});

it("dequeue", () => {
  shelterThree.enqueue(Wicket);
  shelterThree.enqueue(Koda);
  shelterThree.enqueue(Tyler);
  shelterThree.enqueue(AAA);
  shelterThree.enqueue(BBB);
  shelterThree.enqueue(CCC);
  shelterThree.enqueue(DDD);

  expect(shelterThree.dequeue("Dog")).toStrictEqual("Wicket");
  expect(shelterThree.toString()).toStrictEqual(
    "FRONT -> { Type: Dog, Name: Koda } -> { Type: Cat, Name: Tyler } -> { Type: Dog, Name: AAA } -> { Type: Cat, Name: BBB } -> { Type: Cat, Name: CCC } -> { Type: Dog, Name: DDD } -> BACK"
  );
});

it("dequeue", () => {
  expect(shelterThree.dequeue("Cat")).toStrictEqual("Tyler");
  console.log(shelterThree.toString());
  expect(shelterThree.toString()).toStrictEqual(
    "FRONT -> { Type: Dog, Name: Koda } -> { Type: Dog, Name: AAA } -> { Type: Cat, Name: BBB } -> { Type: Cat, Name: CCC } -> { Type: Dog, Name: DDD } -> BACK"
  );
});

it("dequeue from empty shelter", () => {
  expect(shelterThree.dequeue("chinchilla")).toStrictEqual(null);
});
