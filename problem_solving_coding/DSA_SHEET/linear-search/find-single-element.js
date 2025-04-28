let num = [1, 0, 2, 3, 4];
let target = 2;

function linearSearch(num) {
  for (let i = 0; i < num.length; i++) {
    if (target === num[i]) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(num));
