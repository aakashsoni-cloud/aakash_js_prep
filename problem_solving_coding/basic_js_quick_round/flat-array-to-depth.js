const arr = [1, 2, 3, [4, [5]], [6], [[7]]];

function flatArray(arr, depth) {
  if (depth === 0) return arr;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr[i] = flatArray(arr[i], depth - 1);
    }
    result.push(arr[i]);
    // console.log(arr[i]);
  }
  return result;

  //   return arr.reduce((acc, curr) => {
  //     return acc.concat(Array.isArray(curr) ? flatArray(curr, depth - 1) : curr);
  //   }, []);
}

console.log(arr.flat(1));
console.log(flatArray(arr, 2));
