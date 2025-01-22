/// Write a function to count the occurrence of each character in the input string.

/*js
// Input: “abbcccd”
// Output: a: 1, b: 2, c: 3, d: 1
*/

function countCharInString(str) {
  const countChar = str.split("").reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  return countChar;
}
// Second Approach

function countChar(str) {
  const countChar = {};
  for (let i = 0; i < str.length; i++) {
    if (countChar[str[i]]) {
      countChar[str[i]]++;
    } else {
      countChar[str[i]] = 1;
    }
  }
  return countChar;
}

let str = "abbcccd";
console.log(countCharInString(str));
console.log(countChar(str));
