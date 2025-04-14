// Success case
const successTasks = [
  new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Task 2"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Task 3"), 200)),
  "Test",
  3,
];

myCustomPromiseAll(successTasks)
  .then((result) => console.log(result)) // Output: ['Task 1', 'Task 2', 'Task 3','Test',3]
  .catch((error) => console.error(error));

// Error case
const errorTasks = [
  new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject("Error"), 500)),
];

myCustomPromiseAll(errorTasks)
  .then((result) => console.log(result))
  .catch((error) => console.error(error)); // Output: Error

function myCustomPromiseAll(taskList) {
  let result = new Array(taskList.length);
  let completed = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < taskList.length; i++) {
      Promise.resolve(taskList[i])
        .then((data) => {
          result[i] = data;
          completed++;

          if (completed == taskList.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
}
