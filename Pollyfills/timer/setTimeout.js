function customSetTimeout(callback, delay) {
  const startTime = performance.now();
  console.log("startTime", (startTime / 1000).toFixed(2), "s");

  function check(timestamp) {
    console.log(this);
    if (timestamp - startTime >= delay) {
      // const currentTime = performance.now();
      // console.log("currentTime", (currentTime / 1000).toFixed(2), "s");
      // const difference = currentTime - startTime;
      // console.log("difference", (difference / 1000).toFixed(2), "s");
      callback();
    } else {
      requestAnimationFrame(check);
    }
  }
  requestAnimationFrame(check);
}

customSetTimeout(() => {
  console.log("This is custom setTimeout");
}, 4000);
