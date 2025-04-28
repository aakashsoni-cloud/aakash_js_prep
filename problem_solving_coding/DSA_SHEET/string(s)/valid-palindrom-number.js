// Given an integer x, return true if x is a palindrome , and false otherwise.

let x = 121;

function palindromNumber(x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

function palindromNumberApproch2(x) {
  if (x < 0) return false;

  let rem = 0;
  let temp = x;

  while (temp !== 0) {
    let digit = Math.floor(temp % 10);
    rem = rem * 10 + digit;
    temp = Math.floor(temp / 10);
  }

  return rem === x;
}

console.log(palindromNumber(x));
console.log(palindromNumberApproch2(x));
