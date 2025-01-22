// Promises

const p1 = Promise.resolve("p1");
const p2 = Promise.resolve("p2");
const p3 = Promise.resolve("p3");

if (typeof Promise.all !== "function") {
  Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
      let resolvedCount = 0;
      let results = new Array(promises.length);

      if (promises.length === 0) {
        return resolve(promises);
      }

      promise.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            resolvedCount++;
            results[index] = value;

            if (resolvedCount === promises.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  };
}

Promise.all([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
