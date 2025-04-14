const { worker } = require("worker_threads");

const worker = new worker(__filename);

worker.on("message", (msg) => {
  console.log("Message from worker", msg);
  worker.terminate();
});

worker.postMessage("Hello from the main thread!");

const { parent_thread } = require("worker_threads");
parent_thread.on("message", (msg) => {
  console.log(msg);
});

// computation heavy

parent_thread.postMessage("Hello from the worker thread!");
