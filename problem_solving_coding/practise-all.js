// Debouncing and throttling

let counter = 0;
const getData = () => {
  console.log("With Debouncing", counter++);
};

const debounce = function (fn, delay) {
  let timer;

  return function () {
    let context = this,
      args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const throttling = function (func, limit) {
  let timer;
  let flag = true;

  return function () {
    let context = this,
      args = arguments;

    if (flag) {
      func.apply(context, args);
      flag = false;

      timer = setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const func = debounce(getData, 500);

document.getElementById("clickMe").addEventListener("click", func);
document.getElementById("text").addEventListener("keypress", func);


let arr = []
arr[10] = 10;
arr[100] = 100;

console.log(arr)

arr.forEach((item) => console.log("hi"))