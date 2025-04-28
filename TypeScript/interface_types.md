# 🔹 Interface vs Type in TypeScript
Both interface and type are used to define the shape of data (objects), but they differ slightly in capabilities and use cases.

```js
// Interface
interface Person {
  name: string;
  age: number;
}

// Type
type Person = {
  name: string;
  age: number;
};
```


# 🔍 What is interface?
Interface is used to define the structure of an object — like its properties and types.
It is also perform inherit the properties of others 

```js
interface User {
  name: string;
  age: number;
}

interface Person extends User {
  dress: string;
}
```


# 🔍 What is type?
Type is more flexible and powerful.
It can define object shapes as well as:
 - Union types
 - Intersection types
 - Tuples
 - Primitive aliases  (e.g., type ID = string | number)

```js
type ID = string | number;
type Point = [number, number];
type User = { name: string; age: number };
```


# ✅ Best Practice
Use interface for objects and classes.
Use type for everything else (unions, intersections, tuples, primitives).