let count = 0;
const handleExpenseClick = () => {
  console.log("Click: ", count++);
};

const throttle = function (fn, limit) {
  let flag = true;
  let timer;
  return function () {
    let context = this,
      args = arguments;

    if (flag) {
      clearTimeout(timer);

      fn.apply(context, args);
      flag = false;
      timer = setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const throttlingClick = throttle(handleExpenseClick, 1000);

const button = document.getElementById("clickMe");
button.addEventListener("click", throttlingClick);
