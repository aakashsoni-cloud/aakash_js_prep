var twoSum = function (nums, target) {
  let indexMaps = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (indexMaps.hasOwnProperty(diff)) {
      return [indexMaps[diff], i];
    }

    indexMaps[nums[i]] = i;
  }

  return null;
};

var twoSumWithMap = function (nums, target) {
  let map = new Map();

  // let ans = [];

  for (let num of nums) {
    let diff = target - num;

    if (!map.has(diff)) {
      map.set(nums.indexOf(diff), nums.indexOf(num));
    }
    map.get(nums).push();
  }
  return Array.from(map);
};

let arr = [2, 7, 11, 15];

let target = 9;

console.log(twoSum(arr, target));
console.log(twoSumWithMap(arr, target));
