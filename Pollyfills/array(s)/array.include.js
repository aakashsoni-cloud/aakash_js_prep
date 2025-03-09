/* 

## Definition ##
The includes() method -> determines whether an array includes a certain value among its entries, returning true or false. */

/*

## Syntax ##
 -> array.includes(searchElement, fromIndex);

*/

Array.prototype.customIncludes = function (searchElement, fromIndex) {
  let obj = this;
  if (obj === null) throw new Error("'this' is null or not defined");
  if (!Array.isArray(obj)) throw new Error("'this' is not an array");

  let inputArr = Object(obj); // array []
  let inputArrLength = Number(inputArr.length) || 0;

  if (inputArrLength === 0) return false;

  let newIndex = fromIndex || 0;
  //if index is -100, due to Math.abs we will consider it to 100

  // if newIndex is less than 0, we will calculate its absolute value from last index (inputArrLength - Math.abs(newIndex))
  // else it consider the given index
  let finalIndex = Math.max(
    newIndex >= 0 ? newIndex : inputArrLength - Math.abs(newIndex),
    0
  );

  while (finalIndex < inputArrLength) {
    if (
      typeof searchElement === "number" &&
      isNaN(searchElement) &&
      isNaN(inputArr[finalIndex])
    ) {
      return true;
    }

    if (inputArr[finalIndex] === searchElement) return true;

    finalIndex++;
  }

  return false;
};

// Example 1
const arr = [4, 1, 10, 6, 9, 2];
console.log(arr.includes(1, 2));

// Example 2
console.log(arr.customIncludes(1, 1));

// Example 3
console.log([1, 2, 3, 4].customIncludes(3, -2)); // true;

// Example 4
console.log([NaN, 1, 2].customIncludes(NaN)); // true
