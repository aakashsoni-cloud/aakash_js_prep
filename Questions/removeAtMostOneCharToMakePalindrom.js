// 680. Valid Palindrome II
function isPalindrome(str, start, end) {
  while (start <= end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
}

function removeAtMostOneChar(str) {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] !== str[end]) {
      return (
        isPalindrome(str, start + 1, end) || isPalindrome(str, start, end - 1)
      );
    }

    start++;
    end--;
  }

  return true;
}

console.log(removeAtMostOneChar("Hello Me"));
console.log(removeAtMostOneChar("raceecar"));
console.log(removeAtMostOneChar("abca"));
console.log(removeAtMostOneChar("abc"));
