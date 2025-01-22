// Find the string is palindrome or not

// Input string consist of the letter, digits, spaces, punctuation and
// special characters

// function should accept case-insensitive string

//  Ignore space, special characters and other things to find palindrome string

// return true or false

function isPalindrome(str) {
  const newString = str.toLowerCase().replace("/[^a-z0-9]/gi", "");

  let start = 0;
  let end = newString.length - 1;

  while (start <= end) {
    if (newString[start] !== newString[end]) return false;
    start++;
    end--;
  }
  return true;

}

console.log(isPalindrome("Hello Me"));
console.log(isPalindrome("raceecar"));
