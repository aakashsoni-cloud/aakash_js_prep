// 🔒 Object.freeze(obj)
/* Purpose: Makes the object completely immutable. Can change in nested object
Effects:

❌ Cannot add new properties.

❌ Cannot remove existing properties.

❌ Cannot change existing property values.

❌ Cannot change property descriptors (like writable, configurable).

✅ The object becomes fully locked.
*/

const obj1 = Object.freeze({ name: "Alice", info: { add: "jaipur" } });
obj1.name = "Bob"; // ❌ Fails silently (or throws in strict mode)
obj1.age = 25; // ❌ Can't add new property
delete obj1.name; // ❌ Can't delete
obj1.info.add = "Pune";
console.log(obj1); // { name: "Alice" }

// 🔐 Object.seal(obj)
/* Purpose: Prevents adding or removing properties, but allows modification of existing values.

Effects:

❌ Cannot add new properties.

❌ Cannot remove properties.

✅ Can modify existing property values (if they are writable).

❌ Properties become non-configurable, so you can't change their descriptors.
*/

const obj = Object.seal({ name: "Alice" });
obj.name = "Bob"; // ✅ Allowed
obj.age = 25; // ❌ Can't add
delete obj.name; // ❌ Can't delete
console.log(obj); // { name: "Bob" }
