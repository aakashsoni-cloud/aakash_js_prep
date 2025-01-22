function findSecondLargest(arr) {
  
    let first = arr[0];
    let second = -1;
  
    for (let num of arr) {
      if (num > first) {
        second = first;
        first = num;
      } else if (num > second && num < first) {
        second = num;
      }
    }
  
    return second === -1 ? -1 : [first, second];
  }
  const arr = [1, 5, 20, 5, 6];
  console.log(findSecondLargest(arr));
  