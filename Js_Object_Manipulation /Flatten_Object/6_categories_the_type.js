const input = [
  {
    category: "Frontend",
    topics: ["HTML", "CSS"],
  },
  {
    category: "Backend",
    topics: ["Node", "Express"],
  },
];

/*
  Expected Output:
  {
    HTML: "Frontend",
    CSS: "Frontend",
    Node: "Backend",
    Express: "Backend"
  }
  */

function categoriesObj(input, result = {}) {
  if (!Array.isArray(input)) return false;

  if (input && Array.isArray(input)) {
    input.forEach((items) => {
      if (Array.isArray(items.topics)) {
        items.topics.forEach((topic) => {
          result[topic] = items.category;
        });
      }
    });
  }

  return result
}

console.log(categoriesObj(input));