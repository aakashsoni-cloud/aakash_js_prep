function binarySubarraySumPrefixSum(num, k) {
  let prefixMap = {};
  prefixMap[0] = 1;
  let prefixSum = 0;
  let count = 0;

  for (let i = 0; i < num.length; i++) {
    prefixSum += num[i];

    let remove = prefixSum - k;
    count += prefixMap[remove] || 0;

    prefixMap[prefixSum] = (prefixMap[prefixSum] || 0) + 1;
  }
  return count;
}
let num = [1, 0, 1, 0, 1];
let goal = 2;

console.log(binarySubarraySumPrefixSum(num, goal));
