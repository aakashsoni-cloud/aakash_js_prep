## Generics in Typescript

-  Are a tool that allows you to create `reusable` and flexible `functions`, `classes`, `interfaces`, and `types`. 
-  ***They work by allowing you to parameterize types***, similar to how you might parameterize values in a function. 
-  `Generics`
     <ins>provide a way to work with any data type and ensure that the consistency of that data type is maintained</ins> throughout the function or class.
-  The power of generics comes from the <ins>***ability to work with any type while maintaining the relationship between the input and output types***</ins>, the types of properties, etc., without giving up type safety.

-----


### Generic Functions
- A generic function can work on any data type or ensure that two inputs are of the same type without specifying the data types in advance. 

```js
function identity<T>(arg: T): T {
    return arg;
}
```

- In this function, `<T>` is a type variable that **captures the type the user provides** (e.g., number, string), so that we can use that type later in the function argument and return type. 
- When the function is called, TypeScript infers the type for `T` based on the argument passed to the function.

```js
let output1 = identity<string>("myString");
let output2 = identity<number>(100);
```

```js
//Generic Interfaces
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```