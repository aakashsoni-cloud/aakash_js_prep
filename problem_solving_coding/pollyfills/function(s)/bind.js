const person = {
  firstName: "aakash",
  lastName: "soni",
};

function greetings(homeTown, age, state) {
  console.log(
    "Hello " +
      this.firstName +
      " " +
      this.lastName +
      " " +
      homeTown +
      " " +
      age +
      " " +
      state
  );
}

Function.prototype.customBind = function (...args) {
  let obj = this,
    params = args.slice(1);

  return function (...args2) {
    // obj.call(args1[0], ...params, ...args2);
    obj.call(args[0], ...params, ...args2);
  };
};

let greet = greetings.customBind(person, "delhi", 23);
greet("Rajasthan");
