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

function flattenTheObjectUsingTwoParentKey(obj, result = {}, parentKey = "") {
  if (obj === null || typeof obj !== "object") return undefined;

  for (const [key, values] of Object.entries(obj)) {
    let newKey = parentKey ? `${parentKey}.${key}` : key;

    if (values && typeof values === "object") {
      newKey = parentKey ? `${parentKey}_${key}` : key;
      flattenTheObjectUsingTwoParentKey(obj[key], result, newKey);
    } else {
      result[newKey] = values;
    }
  }
  return result;
}

console.log(flattenTheObjectUsingTwoParentKey(response));
