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

  for (const [key] of Object.entries(object)) {
    const foundValue = findValueByKey(object[key], keyToFind);
    if (foundValue !== undefined) return foundValue;
  }
  return undefined;
}
console.log(findValueByKey(nestedObject, "d")); // Returns 'Value'
console.log(findValueByKey(nestedObject, "f")); // Returns 'AnotherValue'
console.log(findValueByKey(nestedObject, "g")); // Returns 'undefined'
