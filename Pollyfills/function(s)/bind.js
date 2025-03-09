const person = {
  firstName: "Aakash",
  lastName: "Soni",
};

function greetings(homeTown, age, state) {
  console.log(
    "Hello " +
      this.firstName +
      " " +
      this.lastName +
      "! " +
      homeTown +
      " " +
      age +
      " " +
      state
  );
}

Function.prototype.customBind = function (context, ...args) {
  // let obj = this,
  //   params = args.slice(1);

  // return function (...args2) {
  //   obj.call(args[0], ...params, ...args2);
  // };

  // using context

  if (typeof this !== "function") {
    throw new Error('"this" can not be bound as it is not callable');
  }

  context.fn = this;
  return function (...newArgs) {
    context.fn(...args, ...newArgs);
    delete context.fn;
  };
};

let greet = greetings.customBind(person, "Delhi", 23);
greet("Rajasthan");
