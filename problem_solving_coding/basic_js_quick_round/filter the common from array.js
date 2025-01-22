let arrays = [
  ["a", "b", "c"],
  ["b", "c", "d"],
  ["c", "d", "e"],
];

// let outPutCommon = ["c"];

function outputCommon(arr) {
  return arr.reduce((acc, curr) => {
    // return acc.map((val) => val.filter((v) => console.log(v)));
    // console.log(acc, curr)

    curr.map((val) => curr.includes(val));
    return acc;
  }, []);
}

console.log(outputCommon(arrays));


