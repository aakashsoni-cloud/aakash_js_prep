let interval = {};

function customSetInterval(callback, delay) {
  let startTime = performance.now(); // Store the start time
  const id = Symbol("interval"); // Unique ID for each interval

  function loop(timestamp) {
    if (!interval[id]) return; // Stop if interval is cleared

    if (timestamp - startTime >= delay) {
      callback();
      startTime = timestamp; // Reset the timer
    }

    interval[id] = requestAnimationFrame(loop); // Continue looping
  }

  interval[id] = requestAnimationFrame(loop); // initial looping
  return id;
}

function customClearInterval(id) {
  if (interval[id]) {
    cancelAnimationFrame(interval[id]); // Stop animation frame
    delete interval[id]; // Remove from the list
  }
}

const intervalId = customSetInterval(() => {
  console.log("This is custom setInterval");
}, 1000);

setTimeout(() => {
  customClearInterval(intervalId);
  console.log("Interval Stopped");
}, 5000);
