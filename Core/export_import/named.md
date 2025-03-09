# Named Export and Import
## Use Case: When exporting multiple values from a module.


```js
    // Module.js
    export const name = "John";
    export function greet() {
        return "Hello!";
    }
    export const age = 25;


    // App.js
    import { name, greet, age } from "./Module.js";

    console.log(name); // John
    console.log(greet()); // Hello!
    console.log(age); // 25

``` 

## Key Points
    ### You have to use {}
    ### You can export multiple values.
    ### Import names must match exactly.
