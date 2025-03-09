const newCLose = () => {
  let a = 20;
  return a;
};
function close() {
  const data = setTimeout(function () {
    return newCLose();
  }, 1000);

  console.log(data);
}

close();
