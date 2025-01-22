let data = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
];

// let output = {
//   fruit: [
//     { category: "fruit", name: "apple" },
//     { category: "fruit", name: "banana" },
//   ],
//   vegetable: [{ category: "vegetable", name: "carrot" }],
// };

function groupByKeys(data) {
  return data.reduce((acc, curr) => {
    const { category } = curr;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(curr);
    return acc;
  }, {});
}

console.log(groupByKeys(data));
