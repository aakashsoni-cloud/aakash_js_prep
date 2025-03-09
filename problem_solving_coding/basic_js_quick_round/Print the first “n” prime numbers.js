// Print the first “n” prime numbers
// n = 5
// Output: 2 3 5 7 11

function isPrime(a) {
  for (let i = 2; i * i <= a; i++) {
    if (a % i === 0) return false;
  }
  return true;
}

function printFirstNPrimes(n) {
  let output = [];
  let num = 2;

  while (output.length < n) {
    if (isPrime(num)) {
      output.push(num);
    }
    num++;
  }
  return output;
}

console.log(printFirstNPrimes(5));
