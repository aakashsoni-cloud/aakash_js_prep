/* 

## Definition ##
The isArray() method ->  determines whether the passed value is an array.
                            If **`not`** , it returns **`false`**

## Syntax ##
 -> Array.isArray(value);

*/

// One common approach is to use the `Object.prototype.toString.call()` method to get the object type as a string and check if it is **`"[object Array]"`**.
Array.customIsArray = function (value) {
  return Object.prototype.toString.call(value) === "[object Array]";
};

Array.prototype.customIsArrayProto = function () {
  return Object.prototype.toString.call(this) === "[object Array]";
};
// Example 1
const arr = [4, 1, 10, 6, 9, 2];
console.log(Array.isArray(arr));

// Example 2
const people = [
  { name: "John", age: 15 },
  { name: "Doe", age: 17 },
  { name: "Anna", age: 22 },
  { name: "Mike", age: 19 },
];
console.log(people.customIsArrayProto());

// Example 3
console.log("Array.customArray({})", Array.customIsArray({})); //false

// Example 4
console.log([].customIsArrayProto()); // true
