const people = [
    { name: "Alice", city: "Delhi" },
    { name: "Bob", city: "Mumbai" },
    { name: "Charlie", city: "Delhi" },
    { name: "David", city: "Mumbai" },
    { name: "Eve", city: "Bangalore" },
  ];
  
  /*
    Expected Output:
    {
      Delhi: ["Alice", "Charlie"],
      Mumbai: ["Bob", "David"],
      Bangalore: ["Eve"]
    }
    */
  
  function groupByPropertyValue(array, result = {}) {
    if (array == null || !Array.isArray(array)) return false;
  
    if (array && Array.isArray(array)) {
      array.forEach((item) => {
        if (!result[item.city]) {
          result[item.city] = [];
        }
        result[item.city].push(item.name);
      });
    }
    return result
  }
  console.log(groupByPropertyValue(people));