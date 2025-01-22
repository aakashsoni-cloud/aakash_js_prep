

function extractNumber(str) {
    const regex = /\d+/g;
    return str.match(regex);
}

console.log(extractNumber("abc123"));
console.log(extractNumber("123abc"));
console.log(extractNumber("abc123abc"));
console.log(extractNumber("123abc123"));
console.log(extractNumber("abc"));


