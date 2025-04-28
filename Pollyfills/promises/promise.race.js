const successTasks = [
    new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000)),
    new Promise((resolve) => setTimeout(() => resolve("Task 2"), 500)),
    new Promise((resolve) => setTimeout(() => resolve("Task 3"), 200)),
    "Test",
    3,
  ];
  
  customPromiseRace(successTasks)
    .then((result) => console.log(result)) // Output: ['Task 1', 'Task 2', 'Task 3','Test',3]
    .catch((error) => console.error(error));
  
  // Error case
  const errorTasks = [
    new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject("Error"), 500)),
  ];
  
  customPromiseRace(errorTasks)
    .then((result) => console.log(result))
    .catch((error) => console.error(error)); // Output: Error

function customPromiseRace(allPromises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < allPromises.length; i++) {
        Promise.resolve(allPromises[i])
          .then((promise) => {
            resolve(promise);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }
  