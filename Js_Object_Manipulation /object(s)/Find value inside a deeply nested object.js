//Find the value inside a deeply nested object

const nestedObject = {
  a: {
    b: {
      c: {
        d: "Value",
      },
    },
  },
  e: {
    f: "AnotherValue",
  },
};

function findValueByKey(object, keyToFind) {
  if (object == null || typeof object !== "object") return undefined;

  if (keyToFind in object) return object[keyToFind];

  for (let key of Object.keys(object)) {
    let foundKey = findValueByKey(object[key], keyToFind);
    if (foundKey !== undefined) return foundKey;
  }
}

console.log(findValueByKey(nestedObject, "d")); // Returns 'Value'
console.log(findValueByKey(nestedObject, "f")); // Returns 'AnotherValue'
console.log(findValueByKey(nestedObject, "g")); // Returns 'undefined'
