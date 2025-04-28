// custom call

let name = {
  firstName: "aakash",
  lastName: "soni",
};

const printName = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + homeTown + " " + state
  );
};

// CALL
Function.prototype.myCall = function (...args) {
  let obj = this,
    params = args.slice(1);
  obj.call(args[0], ...params);
};

printName.myCall(name, "Jaipur", "Rajasthan");

// APPLY
Function.prototype.myApply = function (...args) {
  let obj = this,
    param = args.slice(1);

  obj.apply(args[0], [param]);
};

printName.myApply(name, ["Jaipur", "Rajasthan"]);

// BIND

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);

  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const printNameAndDetails = printName.myBind(name, "Jaipur");
printNameAndDetails("Rajasthan");

// FIND

let number = [1, 2, 4, 6, 10];

Array.prototype.myFind = function (cb) {
  let obj = this;
  for (let i = 0; i < obj.length; i++) {
    if (cb(obj[i], i, obj)) return obj[i];
  }
  return undefined;
};

let list = number.myFind((num) => num > 2);
console.log(list);

// FILTER

Array.prototype.myFilter = function (cb) {
  if (this == null) {
    throw new TypeError("filter called on null or undefined");
  }

  let obj = this;

  let result = [];
  let array = Object(obj);

  let length = array.length >>> 0;

  for (let i = 0; i < length; i++) {
    for (i in array) {
      if (cb(array[i], i, array)) {
        result.push(array[i]);
      }
    }
  }
  return result;
};

let list2 = number.myFilter((num) => num > 2);
console.log(list2);

// REDUCE

Array.prototype.myReduce = function (cb, initialValue) {
  if (this == null) {
    throw new TypeError("reduce called on null or undefined");
  }

  let obj = this;

  const array = Object(obj);
  const length = array.length >>> 0;
  let index = 0;
  let accumulator = 0;

  if (arguments.length > 1) {
    accumulator == initialValue;
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

let result = number.myReduce((acc, curr) => {
  if (curr > 2) {
    acc += curr;
  }
  return acc;
}, 0);
console.log(result);
