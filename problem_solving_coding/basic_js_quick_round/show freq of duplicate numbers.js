const data = [3, 2, 5, 6, 7, 2, 5, 3, 3, 4, 8];
// Output- Show Frequnecy of duplicate elements Only -

function countFreq(arr) {
  // const frequency = arr.reduce((acc, curr) => {
  //   if (acc[curr]) {
  //     acc[curr] += 1;
  //   } else {
  //     acc[curr] = 1;
  //   }
  //   return acc;
  // }, {});

  let frequency = {};

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]] > 0) {
      frequency[arr[i]]++;
    } else {
      frequency[arr[i]] = 1;
    }
  }

  return Object.entries(frequency).filter(([key, values]) => {
    if (values > 1) {
      console.log(`${key} : ${values}`);
    }
  });
}

countFreq(data);
