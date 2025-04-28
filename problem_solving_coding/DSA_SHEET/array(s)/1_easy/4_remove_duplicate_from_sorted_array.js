/*
### Remove Duplicates from Sorted Array ###

    Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]
    Explanation: Your function should return k = 2, 
    with the first two elements of nums being 1 and 2 respectively.
    It does not matter what you leave beyond the returned 
    k (hence they are underscores).


*/

function removeDuplicate(arr) {
  let l = 1,
    r = 1;
  let n = arr.length;
  while (r < n) {
    if (arr[r] != arr[l - 1]) {
      arr[l] = arr[r];
      l++;
    }
    r++;
  }

  return l;
}

let num = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicate(num));
