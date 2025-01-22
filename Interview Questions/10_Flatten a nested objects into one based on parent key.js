// Flatten a nested objects into one based on parent key

/*
Output will be:
{
    age: 21,
    characteristics.height: "6 feet",
    name: "Manu",
    techStack.framework.name: "Nextjs",
    techStack.framework.version: "12",
    techStack.language: "Javascript"
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
    },
  },
};

const flattenObjectWithKey = (obj) => {
  if (typeof obj !== "object" && obj === null) return undefined;

  const result = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      Object.assign(result, flattenObjectWithKey(obj[key]));
    } else {
      result[key] = obj[key];
    }
  }
  return result;
};

function flattenTheObject(obj, parentKey = "", result = {}) {
  if (typeof obj !== "object" && obj === null) return undefined;

  for (const [key, values] of Object.entries(obj)) {
    const newKey = parentKey ? `${parentKey}_${key}` : key;

    if (values && typeof values === "object" && !Array.isArray(values)) {
      flattenTheObject(values, newKey, result);
    } else {
      result[newKey] = values;
    }
  }
  return result;
}

console.log(flattenObjectWithKey(response));
console.log(flattenTheObject(response));
