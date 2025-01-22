// const arr = [1, 2, 3, 4, 5];
// function double(x) {
//   return x * 2;
// }

// const output = arr.map((x) => x.toString(2));

// console.log(output);

// const filterValue = arr.filter((x) => x % 2 !== 0);

// console.log(filterValue);

// Reducers

// function findSum(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findSum(arr));

// const output = arr.reduce((acc, curr) => {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);

// console.log(output);

const people = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 35,
    salary: 50000,
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    age: 25,
    salary: 55000,
  },
  {
    firstname: "Michael",
    lastname: "Johnson",
    age: 45,
    salary: 75000,
  },
  {
    firstname: "Emily",
    lastname: "Davis",
    age: 29,
    salary: 60000,
  },
  {
    firstname: "Chris",
    lastname: "Brown",
    age: 35,
    salary: 65000,
  },
];

const output = people.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output);

const ages = people.filter((p) => p.age < 30).map((p) => p.firstname);

console.log(ages)

const reduceAge = people.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push(curr.firstname);
    }
    return acc;
}, [])

console.log(reduceAge)
