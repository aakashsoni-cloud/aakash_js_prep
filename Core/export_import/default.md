# Default Export and Import
## When exporting a single value from a module.

```js
    // Module.js

    export default function greet() {
        return "Hello, Default!";
    }

    // App.js

    import greet from "./Module.js";
    console.log(greet()); 

    or 

    import sayHello from "./Modules.js" // change name as per usage or the values

```

## Key Points
    ### Do not need to use {}.
    ### Only *one* *default* export per module.
    ### Import names can be different.