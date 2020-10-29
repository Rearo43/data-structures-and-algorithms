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
      return "Only accept 'Dog' or 'Cat'.";
    }

    if (!this.front) {
      this.front = animal;
      this.back = this.front;
    } else {
      this.back.next = animal;
      this.back = this.back.next;
    }
  }


}

/* TEST for animal-shelter.test.js below
------------------------------------------------------------------------------------------------ */
const shelterOne = new AnimalShelter();
const shelterTwo = new AnimalShelter();

const Laina = new Pet("Cat", "Laina");
const Ronnie = new Pet("Cat", "Ronnie");
const Khai = new Pet("Dog", "Khai");
const Wicket = new Pet("Dog", "Wicket");
const Max = new Pet("Chinchilla", "Max");

it("create shelter list", () => {
  shelterOne.enqueue(Wicket);
  shelterOne.enqueue(Laina);
  shelterOne.enqueue(Khai);
  shelterOne.enqueue(Ronnie);

  expect(shelterOne.toString()).toStrictEqual(
    "FRONT -> { Type: Dog, Name: Wicket } -> { Type: Cat, Name: Laina } -> { Type: Dog, Name: Khai } -> { Type: Cat, Name: Ronnie } -> BACK"
  );
});

it("trying to add an animal that is not a cat or dog", () => {
  expect(shelterTwo.enqueue(Max)).toStrictEqual("Only accept 'Dog' or 'Cat'.");
});
