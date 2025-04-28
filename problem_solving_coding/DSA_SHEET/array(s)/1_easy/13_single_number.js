// Given a non-empty array of integers nums, every element appears twice except for one.
// Find that single one.

let num = [1, 2, 4, 2, 1];

// Brute Force ->  TC : O(N^2) SC: O(1)

function singleNumber(num) {
  let n = num.length;
  let count;

  for (let i = 0; i < n; i++) {
    let find = num[i],
      count = 0;

    for (let j = i + 1; j < n; j++) {
      if (num[j] == find) {
        count++;
      }
    }

    if (count == 0) {
      return find;
    }
  }
}

console.log(singleNumber(num));

// Better Approach : Hashing->  TC: O(3N) SC: O(maxi)

function singleNumberHash(num) {
  let n = num.length;
  let maxi = num[0];

  for (let i = 0; i < n; i++) {
    maxi = Math.max(maxi, num[i]); // O(N)
  }

  let hash = Array.from(Array(maxi + 1).fill(0));

  for (let i = 0; i < n; i++) {
    // O(N)
    hash[num[i]]++;
  }

  for (let i = 0; i < n; i++) {
    // O(N)
    if (hash[num[i]] == 1) {
      return num[i];
    }
  }
}

console.log(singleNumberHash(num));

// Optimized Approach : Mapping->  TC: (N*logM) SC: O(n/2+1)

function singleNumberMap(num) {
  let n = num.length;
  let map = {};

  for (let i = 0; i < n; i++) {
    map[num[i]] = (map[num[i]] || 0) + 1;
  }

  for (let key of Object.keys(map)) {
    if (map[key] == 1) {
      return parseInt(key);
    }
  }
}

console.log(singleNumberMap(num));

// Optimized Approach : XOR

function singleNumberXOR(arr) {
  let n = arr.length;
  let xor1 = 0;

  for (let i = 0; i <= n - 1; i++) {
    xor1 = xor1 ^ arr[i]; // 1^2^4^5
  }

  return xor1; // (1^1)^(2^2)^(3^3)^(4^4)^(5^5)
}

console.log(singleNumberXOR(num));
