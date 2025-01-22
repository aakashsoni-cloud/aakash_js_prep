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

function convertStringToObj(str, result = {}) {
  str = str.split("&");
  console.log(str);
  let key = "";
  let value = "";

  for (let i = 0; i < str.length; i++) {
    key = str[i].split("=")[0];
    value = str[i].split("=")[1];
    result[key] = value;
  }

  console.log(result)
  const output = flattenObj(result);
  return output;
}

function flattenObj(obj, result = {}) {
  if (obj === null || typeof obj !== "object") return undefined;


  for (const [key, values] of Object.entries(obj)) {
    let newKey = key.toString().split(".");
    console.log(newKey)
    // if (values && typeof values === "string") {
    //   flattenObj(obj[key], result);
    // } else {
    //   result[key] = values;
    // }
  }
  return result;
}

console.log(convertStringToObj(inputQueryString));
