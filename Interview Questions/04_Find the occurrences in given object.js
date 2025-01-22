const people = [
  { name: "Mary", gender: "girl" },
  { name: "Paul", gender: "boy" },
  { name: "John", gender: "boy" },
  { name: "Lisa", gender: "girl" },
  { name: "Bill", gender: "boy" },
  { name: "Maklatura", gender: "girl" },
  { name: "Sara", gender: "girl" },
];

const countGender = people.reduce((acc, curr) => {
  if (acc[curr.gender]) {
    acc[curr.gender]++;
  } else {
    acc[curr.gender] = 1;
  }
  return acc;
}, {});

function countGenderAll(people) {
  const count = {};

  for (let gen of people) {
    count[gen.gender] = (count[gen.gender] || 0) + 1;
  }
  return count;
}

const output1 = countGender;
const output2 = countGenderAll(people);
console.log(output2);
console.log("boys:", output2.boy); // "boy: 3"
