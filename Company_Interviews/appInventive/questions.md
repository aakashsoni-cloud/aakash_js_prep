# 1
const string = "hello how are you"; // waryu
let hashMap = {};

let resultString = "";

// O(N)

// Single loop — O(N)
for (let char of string) {
    if (char === " ") continue;

    // Update hashMap
    if (!hashMap[char]) {
        hashMap[char] = 1;
        resultString += char; // First time seeing this char
    } else {
        hashMap[char]++;
        // Remove from resultString if it occurs again
        resultString = resultString.replace(char, "");
    }
}

console.log(resultString)
