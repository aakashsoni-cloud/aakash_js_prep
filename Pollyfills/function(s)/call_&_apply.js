const person = {
  firstName: "aakash",
  lastName: "soni",
};

function greetings(homeTown, age) {
  console.log(
    "Hello " + this.firstName + " " + this.lastName + " " + homeTown + " " + age
  );
}

greetings.call(person, "Jaipur", 20);

Function.prototype.customCall = function (context, ...args) {
  if (typeof this !== " function") {
    throw new Error('"this" is not a function');
  }

  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
};

greetings.customCall({ firstName: "abhishek", lastName: "soni" }, "Jaipur", 10);

Function.prototype.customApply = function (context, args) {
  if (typeof this !== " function") {
    throw new Error('"this" is not a function');
  }

  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
};

greetings.customApply(person, ["Jaipur", 10]);
