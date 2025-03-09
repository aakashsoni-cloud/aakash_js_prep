let obj = {
  a: ["4", "2", "3"],
  b: ["4", "3"],
  c: ["3"],
};

/*
  {
      "4":["a","b"],
      "2":["a"],
      "3":["a","b","c"]
  }
  */

function convertObjInFormat(obj, result = {}) {
  if (obj === null || typeof obj !== "object") return false;

  for (const [key, values] of Object.entries(obj)) {
    if (values && Array.isArray(values)) {
      values.forEach((value) => {
        if (!result[value]) {
          result[value] = [];
        }
        result[value].push(key);
      });
    }
  }
  return result;
}

console.log(convertObjInFormat(obj));
