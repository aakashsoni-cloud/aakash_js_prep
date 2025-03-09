const inputQueryString =
  "closePrice.high=100000&closePrice.low=0&industryIds=2,9,47,55,114&marketCap.high=2000000&marketCap.low=0&page=0&size=15&sortType=ASC";

/*
    parsedObject = {
            closePrice: {
                high: 100000,
                low: 0
            },
            industryIds: [2,9,47,55,114],
            marketCap: {
                high: 2000000,
                low: 0
        },
        page: 0,
        size: 15,
        sortType: 'ASC'
    }
*/

function convertStringToObj(str) {
  return str.split("&").reduce((acc, pair) => {
    let [key, values] = pair.split("=");
    const keys = key.split(".");
    flattenObj(acc, keys, values);
    return acc;
  }, {});
}

function flattenObj(obj, keys, values) {
  if (obj === null || typeof obj !== "object") return undefined;
  const key = keys.shift();

  if (!keys.length) {
    obj[key] = values.includes(",") ? values.split(",").map((item) => item) : values;
  } else {
    obj[key] = obj[key] || {};
    flattenObj(obj[key], keys, values);
  }
}

console.log(convertStringToObj(inputQueryString));
