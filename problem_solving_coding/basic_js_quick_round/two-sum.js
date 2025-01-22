let arr = [2, 7, 11, 15];
let target = 9;

function twoSum(arr, target) {
  let hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];

    if (diff in hashMap) {
      return [hashMap[diff], i];
    }
    hashMap[arr[i]] = i;
  }
}

console.log(twoSum(arr, target));
