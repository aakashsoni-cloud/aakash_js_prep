<!-- /* var a = 10;

function xyz() {
  return function abc() {
    console.log(a);
  }
}

xyz()(); */

/* const a = "John";
 
function first() {
  const b = 'Hello';
  second();
 
  function second() {
  const c = "Ho";
  third();
}
}
 
function third() {
  const d = "hey";
  console.log(d); // Hey
  console.log(b,c); // reference error 
  console.log(a); // John
}
 
first();
 */

/* const name = "HEHE"

function first() {
  const age = 30
  if (age >= 30) {
    const decade = 3
    var mill = "pop"
  }
  console.log(mill) // pop
  // console.log(decade) // refrence error
  function second() {
    console.log(
      `HEHE ${mill} is a good person ${age} years of the age when he should be ${age}`,
    )
  }
  second()
}

first() */
const arr = [2, 1, 1, 2, 0, 1, 2, 0, 2]
// [0, 0, 1, 1, 1, 2, 2, 2, 2];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr // Base case
  }

  let pivot = arr[0]
  let left = []
  let right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(arr))

console.log(a)
var a = 10
function a() {
  console.log("Hello")
}
console.log(a)

// short hand operator
// nulish colpsible operator

console.log(3 && 4) // 4
console.log(3 || 4) // 3
console.log(3 ?? 4) // 3 -->
