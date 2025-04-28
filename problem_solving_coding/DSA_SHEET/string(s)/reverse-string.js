// Reverse the given string bellow without using reverse method of JS
// aakash deep soni
// hsakaa peed inos

function revereString(name) {
  return name
    .split(" ")
    .map((word) => {
      let chars = word.split("");
      let left = 0,
        right = word.length - 1;

      while (left < right) {
        let temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;

        left++;
        right--;
      }

      return chars.join("");
    })
    .join(" ");
}

console.log(revereString("aakash deep soni"));
