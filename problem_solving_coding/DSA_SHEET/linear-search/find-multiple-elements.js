// if element occurs more than once
let num = [1, 0, 2, 3, 4, 2];
let target = 2;

function linearSearch(num) {
  let res = [];
  for (let i = 0; i < num.length; i++) {
    if (target === num[i]) {
      res.push(i);
    }
  }

  if (res.length === 0) return -1;
  return res;
}

console.log(linearSearch(num));
