
const successTasks = [
  new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Task 2"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Task 3"), 200)),
];

customPromiseAny(successTasks)
  .then((result) => console.log(result)) // Output: ['Task 1', 'Task 2', 'Task 3','Test',3]
  .catch((error) => console.error(error));

// Error case
const errorTasks = [
  new Promise((resolve, reject) => setTimeout(() => reject("Task 1"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject("Error"), 500)),
];

customPromiseAny(errorTasks)
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); // Output: Error

function customPromiseAny(taskList) {
  let errors = [];
  let rejectedError = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < taskList.length; i++) {
      Promise.resolve(taskList[i])
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          errors[i] = error;
          rejectedError++;

          if (rejectedError == taskList.length) {
            reject(new AggregateError(errors, "All Promises are rejected"));
          }
        });
    }
  });
}
