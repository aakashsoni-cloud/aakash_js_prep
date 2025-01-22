//Input - [3, 4, 1, 4, 1];

//Output- [4,1] return duplicate elements array only

const arr = [3, 4, 1, 4, 1];

function returnDuplicateItem(arr) {
  // Approach 1 TC O(N) SC O(N)

  let result = [];

  const frequency = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  Object.entries(frequency).filter(([key, values]) => {
    if (values > 1) {
      result.push(parseInt(key));
    }
  });

  console.log(result);

  // Approach 2 TC O(N) SC O(1)

  let l = 0;
  let r = 0;
  let output = {};

  while (r < arr.length) {
    output[arr[r]] = output[arr[r]] + 1 || 1;

    if (output[arr[r]] > 1) {
      arr[l] = arr[r];
      l++;
    }
    r++;
  }
  return arr.slice(0, l);
}

console.log(returnDuplicateItem(arr));
