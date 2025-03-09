### Implement a custom function similar to `SetTimeout` without using native `setTimeout` or `setInterval` functions\*\* using Web workers or requestAnimationFrame


`<strong>Approach Taken:</strong>`

- **requestAnimationFrame** accepts the function as a param
- the passed function in the **requestAnimationFrame** will get its own timestamp which we use this with 
   performance.now (startTime) with the delay passed while invocation (ex: timestamp - startTime >= delay)
- in the else condition we will be doing the same thing by invoking the requestAnimationFrame(func)
- if condition simply executes the callback function

- for better understanding breakdown the code from the output point of view or invocation point of view ex: how do you call the function


