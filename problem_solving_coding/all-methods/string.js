// Truncate literals
const name = "aakash";
console.log`Hello, ${name} How are ${"you"} `;

// Length

let str = "aakash";
console.log(str.length);

// Accessing Characters

let person = "aakash";
console.log(person[0]);
console.log(person[person.length - 1]);

console.log(person.charAt(1));

// modify the string

let str1 = "aakash";
str1[1] = "b"; // can't do this update
console.log(str1);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.replace("a", "d")); // replace first encounter character
console.log(str1.replaceAll("a", "d")); // replace all character

// concatation
let str2 = "aakash";
let str3 = "soni";
console.log(str2.concat(str3));
console.log(`${str2} ${str3}`);

// trimming
let str4 = "   aakash deep soni   ";
console.log(str4);
console.log(str4.trim());

// searching
let str5 = "aakash deep soni";
console.log(str5.indexOf("s")); // first encounter index
console.log(str5.indexOf("soni"));
console.log(str5.indexOf("P")); // not found return -1

console.log(str5.lastIndexOf("a")); // return the last character encounter index

// startsWith and endsWith
// return boolean value

console.log(str5.startsWith("R"));
console.log(str5.endsWith("soni"));

// split
let str6 = "aakash deep soni";
console.log(str6.split(" "));
// console.log(str6.split(""));

// Substring
let str7 = "aakash deep soni";
console.log(str7.substring(6));
console.log(str7.substring(6, -1)); // return the string before the deep soni

// Slice
let str8 = "aakash deep soni";
console.log(str8.slice(6));
console.log(str8.slice(2, -1));

// convert obj into string
let obj = {
  name: "aakash",
  age: 23,
  gender: "male",
};

console.log(String(obj)); // return type of the object [object Object]
console.log(JSON.stringify(obj));

// charCodeAt & fromCharCode

let str9 = "aAKASH";
console.log(str9.charCodeAt(0));
console.log(String.fromCharCode(66));

// string compare

let str10 = "aakash";
let str11 = "Aakash";
console.log(str10.localeCompare(str11)); // not equal return -1
console.log(str10.localeCompare(str11)); // equal return 0

// includes

let str12 = "aakash";
console.log(str12.includes("a"));

// split and join

let str13 = "aakash deep soni";
console.log(str13.split(" "));
console.log(str13.split(" ").join("-"));
