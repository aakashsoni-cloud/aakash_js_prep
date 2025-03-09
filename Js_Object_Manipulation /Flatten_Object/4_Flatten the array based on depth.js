function flat(arr, depth = 2) {
  if (depth === 0) return arr;
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flat(curr, depth - 1) : curr);
  }, []);
}

const arr = [1, [2], [3, [4, [5]]]];

console.log(flat(arr));
// [1, 2, 3, [4, [5]]]
