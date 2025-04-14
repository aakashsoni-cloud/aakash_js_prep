/*

// Buffer

 -> Buffer class is a global class and can be accessed in application without importing buffer module.
 -> It is used to deal with the binary data. 
 -> A Buffer is a kind of an array of integers and represents the chunk of memory allocation outside the chrome V8 heap.
 -> A Buffer cannot be resized.
 -> Need to encode and decode when writing and reading the binary data in base64 or utf-8
 -> 

*/

const bufferData = Buffer.from("Hello World", "utf-8");
console.log(bufferData);
