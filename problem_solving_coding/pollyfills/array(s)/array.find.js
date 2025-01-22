/* 

## Definition ##
The find() method ->  returns the value of the first element in the array that passes a test function.
                            If **`no`** elements are matched, it returns **`undefined`**

## Syntax ##
 -> array.find(callbackFunc, thisArg);

*/

if (!Array.prototype.customFind) {
  Array.prototype.customFind = function (callbackFunc, thisArg) {
    let obj = this;

    if (obj === null) throw new Error("'this' is null or not defined");

    if (typeof callbackFunc !== "function") {
      throw new TypeError("callback must be a function");
    }

    let inputArr = Object(obj); // array []
    let inputArrLength = Number(inputArr.length) || 0;

    if (inputArrLength === 0) return undefined;

    for (let i = 0; i < inputArrLength; i++) {
      if (callbackFunc.call(thisArg, inputArr[i], i, inputArr))
        return inputArr[i];
    }
    return undefined;
  };
}

// Example 1
const arr = [4, 1, 10, 6, 9, 2];
console.log(arr.find((item) => item > 9));

// Example 2
const people = [
  { name: "John", age: 15 },
  { name: "Doe", age: 17 },
  { name: "Anna", age: 22 },
  { name: "Mike", age: 19 },
];
const person = people.customFind((person) => person.age >= 18);
console.log(person);
