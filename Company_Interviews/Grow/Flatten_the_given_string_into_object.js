/* 
const parsedObject = {
  closePrice: {
    high: 100000,
    low: 0,
  },
  industryIds: [2, 9, 47, 55, 114],
  marketCap: {
    high: 2000000,
    low: 0,
  },
  page: 0,
  size: 15,
  sortType: "ASC",
};

*/

const inputQueryString =
  "closePrice.high=100000&closePrice.low=0&industryIds=2,9,47,55,114&marketCap.high=2000000&marketCap.low=0&page=0&size=15&sortType=ASC";

function parseObject(inputString, parsedObject = {}) {
  for (let string of inputString) {
    const keyVal = string.split("=");
    parsedObject[keyVal[0]] = keyVal[1];
  }

  for (const [key, values] of Object.entries(parsedObject)) {
    if (key.includes(".")) {
      const newKey = key.split(".");
      if (newKey.length > 1) {
        parseObject(parsedObject[key], values);
      }
    }
  }
  // for (let key in parsedObject) {
  //   const newKey = key.split(".");
  //   if (newKey.length > 1) {
  //     parseObject(parsedObject[key], parsedObject);
  //   }
  // }
  return parsedObject;
}
console.log(parseObject(inputQueryString.split("&")));
