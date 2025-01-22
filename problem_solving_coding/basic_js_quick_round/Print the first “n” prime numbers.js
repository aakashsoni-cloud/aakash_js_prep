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
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      output.push(i);
    }
  }
  return output;
}

console.log(printFirstNPrimes(5));
