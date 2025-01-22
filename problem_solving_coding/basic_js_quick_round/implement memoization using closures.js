function memoize(fn) {
  const cache = {};

  return function (args) {
    const key = args;

    if (key in cache) {
      console.log("Returning from cache", key);
      return cache[key];
    }


    console.log('Computing result for:', key);
    const result = fn(args);
    cache[key] = result;
    return result;
  };
}

function slowFunction(num) {
  let result = 0;
  for (let i = 0; i < num * 1e6; i++) {
    result += i % 10;
  }
  return result;
}


const memorization = memoize(slowFunction);


console.log(memorization(10));
console.log(memorization(10));
console.log(memorization(20));
console.log(memorization(20));