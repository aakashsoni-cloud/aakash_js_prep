// Brute

// Better TC: O(N) + O(NlogN)

function betterWay(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);

  if (n == 1) return arr[0];

  let count = 0;
  let l = 0,
    r = 0;

  while (r < n) {
    let item = arr[l];
    if (item == arr[r]) {
      count++;
      r++;
    }

    if (item !== arr[r]) {
      l = r;
      count = 0;
    }

    if(count > Math.floor(n/2)) {
        return arr[r];
    }
  }
}

// Moore's Voting Algorithm
// Optimized TC: O(N) + O(N)

/* Algo Pattern
    -> Count increment on same number 
    -> Count decrement on different number

    -> Verifyies if count > n/2
*/

function majorityElement (arr) {
    let n = arr.length;
    let count = 0;
    let currentElement;

    for (let i = 0; i < n; i++) {
        if (count == 0) {
            count = 1;
            currentElement = arr[i];
        } else if (currentElement == arr[i]) {
            count++;
        } else {
            count--;
        }
    }

    let count1 = 0;

    for (let i = 0; i < n; i++) {
        if (currentElement == arr[i]) {
            count1++;
        }
    }

    if (count1 > Math.floor(n / 2)) {
        return currentElement;
    }
}

let  nums = [2,2,1,1,1,2,2];

console.log(majorityElement(nums))