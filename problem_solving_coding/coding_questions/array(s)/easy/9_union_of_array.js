// Given two sorted arrays a[] and b[], where each array may contain duplicate elements ,
// the task is to return the elements in the union of the two arrays in sorted order.

// Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3, 6, 7]
// Output: 1 2 3 4 5 6 7

// Approach 1 -> Brute Force

function unionSet(arr1, arr2) {
  let set = new Set();

  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i]); // O(n1logn)
  }

  for (let i = 0; i < arr2.length; i++) {
    set.add(arr2[i]); // O(n2logn)
  }

  let unionArr = Array.from(set); // O(n1+n2)

  return unionArr;
}

let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 6, 7];

console.log(unionSet(arr, arr2));

// Approach 2 -> Optimizes Two pointers TC: O(N1+N2)

function unionArraySet(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;

  let i = 0;
  j = 0;

  let unionArray = new Array();

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      if (unionArray.length === 0 || !unionArray.includes(arr1[i])) {
        unionArray.push(arr1[i]);
      }
      i++;
    } else {
      if (unionArray.length === 0 || !unionArray.includes(arr2[j])) {
        unionArray.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < n) {
    if (unionArray.length === 0 || !unionArray.includes(arr1[i])) {
      unionArray.push(arr1[i]);
    }
    i++;
  }

  while (j < m) {
    if (unionArray.length === 0 || !unionArray.includes(arr2[j])) {
      unionArray.push(arr2[j]);
    }
    j++;
  }
  return unionArray;
}

console.log(unionArraySet(arr, arr2));
