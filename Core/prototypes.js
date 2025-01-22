let arr = ["aakash", "soni"];

const object = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

function fun() {}

let object2 = {
  city: "Jaipur",
};

object2.__proto__ = object;

// Pollyfill

Array.prototype.people = ["aakash", "soni", "abhishek", "parth"]

const students = [];