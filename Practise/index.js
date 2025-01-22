// deepcopy / shalow copy

// default export //  name export

/// setTimeout / setInterval deep

// for (var i = 0; i < 5; i++) {
//   setTimeout((i) => {
//     console.log(i);
//   }, 1000, i);
// }

// "use strict";
// let p;

// function help() {
//   x = 10;
//   console.log(x, p);
// }

// help();

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

function flattenTheObj(obj, result = {}, finalKey = "") {
  if (obj === null || typeof obj !== "object") return undefined;

  for (const [key, values] of Object.entries(obj)) {
    let newKey = finalKey ? `${finalKey}.${key}` : key;

    if (values && typeof values === "object" && !Array.isArray(values)) {
      flattenTheObj(values, result, newKey);
    } else {
      result[newKey] = values;
    }
  }
  return result;
}

console.log(flattenTheObj(response));
