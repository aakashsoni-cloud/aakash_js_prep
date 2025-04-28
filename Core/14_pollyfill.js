// Polyfill

let name = {
  firstName: "aakash",
  lastName: "soni",
};

let printName = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + homeTown + " " + state
  );
};

let printMyName = printName.bind(name, "Jaipur");
printMyName("Rajasthan");

// Bind

Function.prototype.myBind = function (...args) {
  // this => printName;
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "Jaipur");
printMyName2("Rajasthan");

// Call
Function.prototype.myCall = function (...args) {
  let obj = this,
    params = args.slice(1);

  obj.call(args[0], params);
};

printMyName.myCall(name, "Karauli");

// Apply

Function.prototype.myApply = function (...args) {
  let obj = this,
    params = args.slice(1);
  obj.apply(args[0], [params]);
};

printMyName.myApply(name, "Bengluru");

// find

let number = [1, 2, 4, 6, 10];

Array.prototype.myFind = function (cb) {
  let obj = this;
  for (let i = 0; i < obj.length; i++) {
    if (cb(obj[i], i, obj)) return obj[i];

    // obj[i]: the current element in the array.
    // i: the current index.
    // obj: the array itself
  }
  return undefined;
};

let people = number.myFind((p) => p > 2);
console.log(people);

// Filter

Array.prototype.myFilter = function (cb) {
  if (this == null) {
    throw new TypeError("filter called on null or undefined");
  }

  const result = [];
  const array = Object(this); // Convert `this` to an object in case it's a non-object array-like
  const length = array.length >>> 0; // integer length

  for (let i = 0; i < length; i++) {
    if (i in array) {
      if (cb(array[i], i, array)) {
        result.push(array[i]);
      }
    }
  }
  return result; // Return the array of filtered elements
};

let user = number.myFilter((p) => p > 2);
console.log(user);

// Reduce

Array.prototype.myReduce = function (cb, initialVal) {
  if (this == null) {
    throw new TypeError("reduce called on null or undefined");
  }
  const array = Object(this);
  const length = array.length >>> 0;
  let index = 0;
  let accumulator;

  if (arguments.length > 1) {
    accumulator = initialVal;
  } else {
    while (index < length && !(index in array)) {
      index++;
    }
    if (index >= length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = array[index++];
  }

  for (; index < length; index++) {
    if (index in array) {
      accumulator = cb(accumulator, array[index], index, array);
    }
  }

  return accumulator;
};

let customer = number.myReduce((acc, curr) => {
  if (curr > 2) {
    acc += curr;
  }
  return acc;
}, 0);
console.log(customer);
