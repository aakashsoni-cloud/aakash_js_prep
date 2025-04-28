var findMedianSortedArrays = function (nums1, nums2) {
  // Better way
  let n1 = nums1.length;
  let n2 = nums2.length;
  let count = 0;
  let n = n1 + n2;
  let ind2 = Math.floor(n / 2);
  let ind1 = ind2 - 1;

  let ind1El = -1,
    ind2El = -1;
  let i = 0,
    j = 0;

  while (i < n1 && j < n2) {
    if (nums1[i] < nums2[j]) {
      if (count == ind1) ind1El = nums1[i];
      if (count == ind2) ind2El = nums1[i];
      count++;
      i++;
    } else {
      if (count == ind1) ind1El = nums2[j];
      if (count == ind2) ind2El = nums2[j];
      count++;
      j++;
    }
  }

  while (i < n1) {
    if (count == ind1) ind1El = nums1[i];
    if (count == ind2) ind2El = nums1[i];
    count++;
    i++;
  }
  while (j < n2) {
    if (count == ind1) ind1El = nums2[j];
    if (count == ind2) ind2El = nums2[j];
    count++;
    j++;
  }

  if (n % 2 !== 0) {
    return ind2El;
  }

  const median = (ind1El + ind2El) / 2.0;
  return median;
};


var findMedianSortedArraysBS = function (nums1, nums2) {
    
}

let nums1 = [1, 3, 4, 7, 10, 13];
let nums2 = [2, 3, , 6, 15];

console.log(findMedianSortedArrays(nums1, nums2)); // 5.0
