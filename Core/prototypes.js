let arr = ["aakash", "soni"];
let arrObj = Object.getPrototypeOf(arr);
console.log(arrObj);
let objectProto = Object.getPrototypeOf(arrObj);
console.log(objectProto);
let objectProto2 = Object.getPrototypeOf(objectProto);
console.log(objectProto2);

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

Array.prototype.people = ["aakash", "soni", "abhishek", "parth"];

const students = [];

// Protopype chain

const grandparent = {
  greet() {
    console.log("Hello from Grandparent!");
  },
};

const parent = Object.create(grandparent);
parent.sayHi = function () {
  console.log("Hi from Parent!");
};

const child = Object.create(parent);
child.sayHello = function () {
  console.log("Hello from Child!");
};

// Access properties and methods
child.sayHello(); // Output: Hello from Child!
child.sayHi(); // Output: Hi from Parent!
child.greet(); // Output: Hello from Grandparent!
