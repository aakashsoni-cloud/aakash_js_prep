/* 

 #### all ####
 -> wait for all promises to settle
 -> returns an array of all the settled promises

 -> As soon as any promise is rejected, it throw the error immediately
 -> it throw the error as soon the promise is rejected

 #### allSettled ####
 -> wait for all promises to settle
 -> returns an array of all the settled promises

 -> if any of the promise is rejected, it wait for other to get settle
 -> it returned an array of all the success promises along with the rejected promise

 #### race ####
 -> wait for the first promise to settle
 -> returns the first settled promise

 -> if the first promise if rejected, it return a error

 #### any ####
 -> wait for first success promise
 -> look out for next success if previous fails
 -> returns the first success settled promise

 -> if all the promises are rejected, it return a Aggregator error  all promises are rejected
 -> Array with all error promises

*/

const P1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});

const P2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 1000);
});

const P3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 2000);
});

Promise.all([P1, P2, P3])
  .then((res) => {
    console.log("all", res);
  })
  .catch((err) => {
    console.log("all", err);
  });
// fail after 2 sec as soon as it encounter reject promise.

Promise.allSettled([P1, P2, P3])
  .then((res) => {
    console.log("allSettled", res);
  })
  .catch((err) => {
    console.log("allSettled", err);
  });

Promise.race([P1, P2, P3])
  .then((res) => {
    console.log("race", res);
  })
  .catch((err) => {
    console.log("race", err);
  });

Promise.any([P1, P2, P3])
  .then((res) => {
    console.log("any", res);
  })
  .catch((err) => {
    console.log("any", err);
    console.log("any", err.errors);
  });

/* Alternate method for promise.all
 -> use promise.allSettled
 -> use for of sequential execution
*/

async function processSequential(tasks) {
  const res = [];
  for (const task of tasks) {
    res.push(await task());
  }
  return res;
}

const asyncTask = [
  () => Promise.resolve("p1"),
  () => Promise.resolve("p2"),
  () => Promise.resolve("p3"),
];

console.log("Sequential");
processSequential(asyncTask).then(console.log).catch(console.log);
