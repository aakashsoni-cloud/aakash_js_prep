// add ... after the text length reaches at maxLength

let str = "aakashsoni";
let maxLength = 3;

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

console.log(truncate(str, maxLength));
