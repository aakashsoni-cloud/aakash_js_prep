let obj = {
  a: {
    b: {
      c: 1,
    },
    d: 2,
  },
};

// let output = { "a.b.c": 1, "a.d": 2 };

function flattenTheObj(obj, finalKey = "", result = {}) {
  if (obj === null || typeof obj !== "object") return undefined;

  for (let [key, values] of Object.entries(obj)) {
    const newKey = finalKey ? `${finalKey}.${key}` : key;

    if (values && typeof values === "object" && !Array.isArray(values)) {
      flattenTheObj(values, newKey, result);
    } else {
      result[newKey] = values;
    }
  }
  return result;
}

console.log(flattenTheObj(obj));
