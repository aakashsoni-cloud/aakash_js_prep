/*

### once:

- is about wrapping a function in another function 
***that ensures the original function only executes once***, 
regardless of how many times the wrapper is called. 
This can be achieved ***by using a closure to remember whether the function has been called***

*/

function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

function myFunction(...rest) {
  console.log("Function is Called", ...rest);
}

const myFunctionOnce = once(myFunction);

myFunctionOnce("aakash", "deep", "soni");
myFunctionOnce();
