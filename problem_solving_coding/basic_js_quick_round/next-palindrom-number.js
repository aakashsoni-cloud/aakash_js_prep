// find next palindrome number
// . If there is a tie, return the smaller one.
// Input: n = "123"
// Output: 121
// Input: num = 33
// Output: 34

let num = 123; // 111
// 100 // 101

function isPalindrome(num, l, r) {
  while (l > 0 && r < num.length && num[l] === num[r]) {
    l--;
    r++;
  }

  return num.slice(l, r);
}

function findNextPalindrome(num) {
  let str = num.toString();
  let i = 0;

  for (let r = 0; r < str.length; r++) {
    let num1 = isPalindrome(str, r, r);
    let num2 = isPalindrome(str, r, r + 1);

    console.log(num1, num2);
  }
}

console.log(findNextPalindrome(num));
