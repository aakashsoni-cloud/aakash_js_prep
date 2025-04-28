// Given two integer arrays nums1 and nums2, return an array of their intersection
// Each element in the result must be unique and you may return the result in any order.

// Approach 1 -> Brute Force TC: O(N*M)

function intersection(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;

  let visited = Array.from(Array(m).fill(0));

  let inter = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr1[i] == arr2[j] && visited[j] == 0 && !inter.includes(arr1[i])) {
        inter.push(arr1[i]);
        visited[j] = 1;
        break;
      }
    }
  }

  return inter;
}

let a = [1, 2, 2, 1],
  b = [2, 2];

console.log(intersection(a, b));

// Approach 1 -> Optimized Approach TC: O()
function intersectionOP(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0,
    j = 0;
  let res = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      if (res.length === 0 || res[res.length - 1] !== arr1[i]) {
        res.push(arr1[i]);
      }
      i++;
      j++;
    }
  }

  return res;
}

let x = [4, 9, 5],
  y = [9, 4, 9, 8, 4];
console.log(intersectionOP(x, y));

function withMap(arr1, arr2) {
  let mp = {};

  for (let num of arr1) {
    mp[num] = (mp[num] || 0) + 1;
  }

  let res = [];

  for (let num of arr2) {
    if (mp[num]) {
      res.push(num);
      delete mp[num];
    }
  }
  return res;
}
