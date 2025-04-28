// Valid palindrome
// Input string consist of the letter, digits, spaces, punctuation and
// special characters

// function should accept case-insensitive string

//  Ignore space, special characters and other things to find palindrome string

// return true or false

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
}

console.log(isPalindrome("Hello Me"));
console.log(isPalindrome("raceecar"));
console.log(isPalindrome("h"))
