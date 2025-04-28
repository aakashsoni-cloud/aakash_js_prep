// Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in nums.

let num = [4, 14, 2];

function findHamingDistance(num) {
  for (let i = 0; i < num.length; i++) {
    let val = num[i].toString(2);
    let val2 = num[i+1]
  }
}

console.log(findHamingDistance(num));
