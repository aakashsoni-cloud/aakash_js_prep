// Flatten a nested objects into one based on two parent key

/*
Output will be:
{
    "name": "Manu",
    "age": 21,
    "characteristics.height": "6 feet",
    "techStack.language": "Javascript",
    "techStack_framework.name": "Nextjs",
    "techStack_framework.version": "12",
    "techStack_framework_details.something": "something",
    "techStack_framework_details.something2": "something2"
}
*/

const response = {
  name: "Manu",
  age: 21,
  characteristics: {
    height: "6 feet",
  },
  techStack: {
    language: "Javascript",
    framework: {
      name: "Nextjs",
      version: "12",
      details: {
        something: "something",
        something2: "something2",
      },
    },
  },
};

function flattenObjectWithTwoParentKey(obj, firstParentKey = "", result = {}) {
  if (typeof obj !== "object" && obj === null) return undefined;

  for (const [key, values] of Object.entries(obj)) {
    let newKey = firstParentKey ? `${firstParentKey}.${key}` : key;

    if (values && typeof values === "object" && !Array.isArray(values)) {
      newKey = firstParentKey ? `${firstParentKey}_${key}` : key;
      flattenObjectWithTwoParentKey(values, newKey, result);
    } else {
      result[newKey] = values;
    }
  }
  return result;
}

console.log(flattenObjectWithTwoParentKey(response));
