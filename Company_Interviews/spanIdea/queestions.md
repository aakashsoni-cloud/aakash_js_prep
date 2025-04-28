// if(true){
//     var a= 10;
//     var b =10;
//     let c =30
//      a = 20;
// }

// console.log(a)
// console.log(b)
// console.log(c)

function sum (a, b) {
    return a + b
}

let ans = sum('2', 2)
console.log(ans)


// Given the input string "NextlevelGen @info.com",
//  write a program to extract all lowercase 
//     characters and remove duplicates while 
//         preserving their order of appearance.

// Input:
// "NextlevelGen @info.com"

// Output:
// "extlvno"

let str = "NextlevelGen @info.com";
let hashMap = {};

let result = "";

let strnew = ""

for(let i=0;i<str.length;i++) {
    if(str.charAt(i) === str.charAt(i).toLowerCase() && str.charAt(i) !== "@" && str.charAt(i) !== "." && str.charAt(i) !== " ") {
            // console.log(str.charAt(i));
        result += str.charAt(i)
         hashMap[str.charAt(i)] = (hashMap[str.charAt(i)] || 0 )+1
    }
}

console.log(hashMap)

for(let keys of Object.keys(hashMap)) {
    if(hashMap[keys] > 0) {
        strnew += keys;
    }
}

console.log(strnew);
