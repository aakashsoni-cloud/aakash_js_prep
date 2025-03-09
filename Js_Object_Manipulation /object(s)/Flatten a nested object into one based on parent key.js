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
 ## or ##
{
    age: 21,
    characteristics_height: "6 feet",
    name: "Manu",
    techStack_framework_name: "Nextjs",
    techStack_framework_version: "12",
    techStack_language: "Javascript"
}
*/

const object = {
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
    
function flattenTheObjectUsingOneParentKey(obj, result = {}, primaryKey = "") {
  if (obj === null || typeof obj !== "object") return undefined;

  for (const [key, values] of Object.entries(obj)) {
    const newKey = primaryKey ? `${primaryKey}.${key}` : key;

    if (values && typeof values === "object" && !Array.isArray(values)) {
      flattenTheObjectUsingOneParentKey(obj[key], result, newKey);
    } else {
      result[newKey] = values;
    }
  }
  return result;
}

console.log(flattenTheObjectUsingOneParentKey(object));
