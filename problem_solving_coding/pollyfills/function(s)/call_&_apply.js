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


Function.prototype.customCall = function (...args) {
  let obj = this,
    params = args.slice(1);

  obj.call(args[0], ...params);
};

greetings.customCall({ firstName: "abhishek", lastName: "soni" }, "Jaipur", 10);

Function.prototype.customApply = function (...args) {
  let obj = this,
    params = args.slice(1);

  params.forEach((param) => obj.call(args[0], ...param));
};

greetings.customApply(person, ["Jaipur", 10]);
