let arr = [
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
];

let output = { name: "John", age: 30, city: "New York" };

function convertArrayToObject(arr) {
  return arr.reduce((acc, [key, values]) => {
    acc[key] = values;
    return acc;
  }, {});
}

console.log(convertArrayToObject(arr));
