// Call

// Method used to borrow a function
// from another object and apply it to a different object
const date = new Date();

function greetings(greet, time) {
  console.log(greet + ", " + this.name + ", " + time);
}

const user = {//
  name: "Aakash",
};

greetings.call(user, "Hello", date.toDateString());

// Apply -> only syntanx change pass the argument in array

greetings.apply(user, ["Hello", date.toDateString()]);

// Bind ->

let greetMe = greetings.bind(user, "Hello", date.toDateString());
console.log(greetMe);
greetMe();

