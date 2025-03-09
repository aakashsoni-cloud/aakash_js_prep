1. Equality Operators (== vs ===)
 
Loose Equality (==)
Performs type conversion before comparing.
If values have different types, JavaScript coerces them to a common type.
 
console.log(5 == "5");     // true  (string "5" is converted to number 5)
console.log(null == undefined); // true  (special case in JS)
console.log(0 == false);   // true  (false → 0)
console.log("" == 0);      // true  ("" → 0)
console.log([] == 0);      // true  ([] → "" → 0)
console.log([1] == 1);     // true  ([1] → "1" → 1)
 
 
🔹 Strict Equality (===)
No type conversion is performed.
Values must be of the same type and have the same value.
 
console.log(5 === "5");    // false (different types)
console.log(null === undefined); // false (different types)
console.log(0 === false);  // false (different types)
console.log("" === 0);     // false (different types)
console.log([] === 0);     // false (array vs number)
console.log([1] === 1);    // false (array vs number)
 
📌 2. ! (Logical NOT) Operator
 
console.log(!true);        // false
console.log(!false);       // true
console.log(!0);           // true (0 is falsy)
console.log(!"");          // true ("" is falsy)
console.log(!null);        // true (null is falsy)
console.log(!undefined);   // true (undefined is falsy)
console.log(!NaN);         // true (NaN is falsy)
console.log(!"Hello");     // false (non-empty string is truthy)
console.log(![1, 2, 3]);   // false (array is truthy)
console.log(!{});          // false (object is truthy)
 
📌 3. Double NOT (!!) for Truthy/Falsy Checks
 
console.log(!!"Hello");  // ✅ true  (non-empty string is truthy)
console.log(!!0);        // ❌ false (0 is falsy)
console.log(!!1);        // ✅ true  (non-zero numbers are truthy)
console.log(!!"");       // ❌ false (empty string is falsy)
console.log(!!null);     // ❌ false (null is falsy)
console.log(!!undefined);// ❌ false (undefined is falsy)
console.log(!!NaN);      // ❌ false (NaN is falsy)
console.log(!!{});       // ✅ true  (objects are always truthy)
console.log(!![]);       // ✅ true  (arrays are always truthy)
 
📌 4. Truthy vs Falsy Values
🔹 Falsy Values
The following values are falsy in JavaScript:
 
false
0
-0
"" (empty string)
null
undefined
NaN
Everything else is truthy.
 
📌 JavaScript Type Coercion & Edge Cases
Let's break down the tricky behavior of null, undefined, and empty strings ("") when used in comparisons and arithmetic operations.
 
 
Expression          Result  Explanation
null == undefined   true    Special JS rule
null === undefined  false   Different types
null == ""          false   null only equals undefined
null + 5            5       null → 0
undefined + 5       NaN      undefined → NaN
 
🔹 Basic isNaN() Questions
console.log(isNaN(123)); // ❌ false (123 is a number)
console.log(isNaN("Hello")); // ✅ true ("Hello" is not a number)
console.log(isNaN("123")); // ❌ false (String "123" is converted to number 123)
console.log(isNaN(NaN)); // ✅ true (NaN is Not-a-Number)
console.log(isNaN(undefined)); // ✅ true (undefined is not a number)
 
Why does isNaN(" ") return false?
 
console.log(isNaN(" ")); // ❌ false
✅ Explanation:
 
" " (a string with only spaces) is converted to 0, which is a number.
 
🔹 isNaN() vs Number.isNaN() Questions
console.log(isNaN("123abc")); // ✅ true (because "123abc" is not a number)
console.log(Number.isNaN("123abc")); // ❌ false (does not convert to a number)
 
console.log(isNaN(NaN)); // ✅ true
console.log(Number.isNaN(NaN)); // ✅ true
 
✅ Explanation:
 
isNaN(value) converts the value to a number before checking.
Number.isNaN(value) does not convert and only returns true if the value is exactly NaN.
✅ Rule:
 
Use Number.isNaN() for precise checks.