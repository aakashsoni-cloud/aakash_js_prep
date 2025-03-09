// Array constructor

let arr = new Array(1, 2, 3, 4, 5);
console.log(arr);

// Deep copy of an array
// Creation and Conversion

let arr1 = [2, 4, 5, 6, 7];
let arr2 = Array.from(arr1);
let arrnew = Array.of("aakash", 2, "new, false");
arr2[2] = 10;
console.log(arr1);
console.log(arr2);
console.log(arrnew);

// length of array

let arr3 = [2, 4, 5, 6, 7];
console.log(arr3.length);

// iteration in arrays

let arr4 = [9, 10, 11, 12, 13];
// for (const el of arr4) {
//   console.log(el);
// }
console.log(arr4[4]);
console.log(arr4.at(4));

const result = arr4.entries();
console.log(result.next().value); // returns a new array iterator object that contains the key/value pairs for each index

// concat

console.log("## concat ##");
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log([...arr5, ...arr6]); // method1
console.log(arr7); // method2

// reverse

console.log("## Sorting and Reversing ##");

let arr8 = [5, 0, 1, 2, 3];
console.log(arr8.reverse());
console.log(arr8.sort());

// Adding/Removing Elements
console.log("## add/remove ##");

let arr9 = [1, 2, 3];

arr9.push(4);
console.log(arr9);

console.log(arr9.pop());
console.log(arr9);

console.log(arr9.shift()); // remove from front
console.log(arr9);

arr9.unshift(1); // add to front
console.log(arr9);

//Removes elements, inserts new elements and returning the deleted elements.
arr9.splice(1, 1, "aakash"); // remove from index 1
console.log(arr9);

// remove from index 1
console.log(arr9.slice(1, 3));

// Iteration

console.log("## iteration ##");
let arr10 = [1, 2, 3, 4, 5];
// forEach
// map
// filter
// reduce

//every
//some
let res = arr10.every((item) => item > 2); // all element must be greater than 2
console.log(res);

let res2 = arr10.some((item) => item > 2); // any element must be greater than 2
console.log(res2);

// Searching and Finding
console.log("## Searching and Finding ##");

let arr11 = [1, 2, 1, 4, 5, 3];
console.log(arr11.find((item) => item > 2)); // return first item that matches function
console.log(arr11.findIndex((item) => item > 2)); // return first index that matches function
console.log(arr11.indexOf(1)); // return the firstIndex else -1
console.log(arr11.lastIndexOf(1)); // return the firstIndex else -1
console.log(arr11.includes(0)); // return boolean

// Transforming

console.log("## Transforming ##");

let arr12 = [1, 2, [3, 4, 5]];
console.log(arr12.flat());

let arr13 = [1, 2, 3, 4, 5];
// like map and then followed by flat by depth 1 level
console.log(arr13.flatMap((item) => [item * 2]));

console.log(arr12.join("-"));
console.log(arr12.toString());

const arr14 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
console.log(arr14.toString());
console.log(arr14.toLocaleString("en-US"));

// Copying and Filling

console.log("## Copying and Filling ##");

let arr15 = [1, 2, 3, 4, 5];
let arr16 = arr15.copyWithin(1, 0, 3); // copies at index 1 start from 0 to 3
console.log(arr16);
console.log(arr15.fill(0, 0, 3));

// Key/Value Utilities

console.log("## Key/Value Utilities ##");

let arr17 = [1, 2, 3, 4, 5];
let its = arr17.entries();

for (let it of its) {
  console.log(it);
}

for (const [key, values] of arr17.entries()) {
  console.log(`${key} ${values}`);
}
