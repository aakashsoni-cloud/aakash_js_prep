/* 

## Definition ##
The findIndex() method ->  returns the index of the first element in the array that passes a test function.
                            If **`no`** elements are matched, it returns **`-1`**

## Syntax ##
 -> array.findIndex(callbackFunc, thisArg);

*/

const arr = [4, 1, 10, 6, 9, 2];
console.log(arr.findIndex((item) => item == 2));

Array.prototype.customFindIndex = function (cb, thisArg) {
  let obj = this;

  if (obj === null) throw new Error("'this' is null or not defined");

  let inputArr = Object(obj); // array []
  let inputArrLength = Number(inputArr.length) || 0;

  for (let i = 0; i < inputArrLength; i++) {
    /*  
    Invoke callbackFunc with .call():

        The .call() method is used to pass:
        thisArg as this.
        Current array element (inputArr[i]).
        Index (i).
        The entire array (inputArr).
    
    */
    if (cb.call(thisArg, inputArr[i], i, inputArr)) return i;
  }

  return -1;
};

//Example 1
console.log(arr.customFindIndex((item) => item === 4));

//Example 2
const numbers = [-3, 8, 9, -5, 7, -2];
const index = numbers.customFindIndex((num) => num < 0);
console.log(index);

//Example 3
const people = [
  { name: "John", age: 15 },
  { name: "Doe", age: 17 },
  { name: "Anna", age: 22 },
  { name: "Mike", age: 19 },
];
const index1 = people.customFindIndex((person) => person.age >= 18);
console.log(index1);

// Example 3
console.log(
  arr.customFindIndex(
    function (element) {
      return this.searchValue === element;
    },
    { searchValue: 10 }
  )
);
