"use strict";
// this in global space

console.log("Global", this); // globalObject - browser(window), node(global)

// this inside a function

// value of this keyword will be **undefined**

// but js has **this substitution**, this keyword will be replaced with globalObject
// in non-strict mode

// this substitution -> if the value of this is undefined or null it replaced by globalObject

function x() {
  console.log("Function", this);
}
x(); // undefined

// this value depend on how it called

window.x(); // globalObject

// value of this keyword will be **student**

let student = {
  name: "Aakash",
  printName: function () {
    console.log(this.name);
  },
};

student.printName(); // obj

// call, apply, bind

let student2 = {
  name: "Abhishek",
};

student.printName.call(student2); // this will become the value of student2 object

// value of this inside arrow function will be enclosing **lexical context**

// obj present in lexical context

let obj = {
  a: 10,
  x: () => {
    console.log("Arrow function", this);
  },
};

obj.x(); // globalObject - browser(window), node(global)

let obj2 = {
  a: 10,
  x: function () { // lexical context is obj for function 
    // for this arrow function this function is enclosing **lexical context**
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj2.x();
