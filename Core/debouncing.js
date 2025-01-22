// DEBOUNCING IN JAVASCRIPT

let counter = 0;
const getData = () => {
  console.log("Without Debouncing", counter++);
};

// debounce func take two argument fn and delay
// debounce function don't let the passed function to call unnecessary again and again
// only allow to call the func if the difference between the time interval of two function call is greater than delay
const debounce = function (fn, delay) {
  // delay is the delay between the two key press
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

// better function call on every key press
const betterFunction = debounce(getData, 300);

// window.addEventListener('resize', debounce(getData, 300))

/* 

    Why used ?
        -> To avoid unnecessary function call
        -> To avoid memory leak
        -> To reduce multiple api call
 
*/
