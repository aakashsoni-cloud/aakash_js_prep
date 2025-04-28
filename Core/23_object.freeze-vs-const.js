/*

1. const (Constant Declaration):
Scope: const is used to declare variables in JavaScript and variable cannot be reassigned.
Immutability: It does not make the contents of an object immutable. 
If the variable is an object or array, you can still modify the properties or elements inside it.

*/

const obj = { name: 'John' };
obj.name = 'Doe'; // Allowed: The content of the object can be modified.
obj.age = 30; // Allowed: Adding new properties is possible.
// obj = {}; // Error: The reference cannot be reassigned.
console.log(obj)




/*


2. Object.freeze() (Freezing Objects):
Scope: Object.freeze() is a method that makes an object immutable by 
preventing changes to its properties or structure.
Immutability: After freezing, you cannot add, remove, or modify properties of the object. 

However, it only performs a shallow freeze; nested objects remain mutable unless frozen explicitly.

*/

const obj2 = { name: 'John', place: { city: 'New York' } };
Object.freeze(obj2);



obj2.name = 'Doe'; // Ignored or throws an error in strict mode.
obj2.age = 30; // Ignored or throws an error in strict mode.

obj2.place.city = "Mumbai"; // Allowed: The content of the object can be modified.

console.log(obj2);
