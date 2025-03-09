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
  let n = arr1.length;
  let m = arr2.length;

  let i = 0;
  let j = 0;

  let interArr = [];

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      interArr.push(arr1[i]);
      i++;
      j++;
    }
  }

  return interArr;
}

let x = [4, 9, 5],
  y = [9, 4, 9, 8, 4];
console.log(intersectionOP(x, y));
