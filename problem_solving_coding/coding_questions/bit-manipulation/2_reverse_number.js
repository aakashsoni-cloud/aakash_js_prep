

var reverse = function (x) {
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  let rev = 0;
  while (x !== 0) {
    const digit = x % 10;
    x = Math.floor(x / 10);
    if (
      rev > Math.floor((2 ** 31 - 1) / 10) ||
      rev === Math.ceil((2 ** 31 - 1) / 10)
    ) {
      return 0;
    }
    rev = rev * 10 + digit;
  }
  return sign * rev;
};
