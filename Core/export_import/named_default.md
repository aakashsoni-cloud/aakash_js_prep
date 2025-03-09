# Named + Default: Export and Import
## When exporting a single value from a module along with multiple values.


```js
    // Module.js

    export default function greet() {
        return "Hello, Default!";
    }
    export const name = "John";

    // App.js

    import greet, { name } from "./Module.js";
    console.log(greet());
    console.log(name);

```