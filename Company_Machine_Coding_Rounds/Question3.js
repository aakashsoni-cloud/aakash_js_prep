// Reverse the given string bellow without using reverse method of JS
// aakash deep soni
// hsakaa peed inos

/* function revereString(name) {
  // reverse
  let reverString = [];
  name = name.split(" ");
  for (let i = 0; i < name.length; i++) {
    let newWord = name[i].split("")
    let p1 = 0
    let p2 = newWord.length - 1

    while (p1 < p2) {
      let intialVal = newWord[p1]
      newWord[p1] = newWord[p2]
      newWord[p2] = intialVal
      p1++
      p2--
    }
    reverString.push(newWord.join(""))
  }
  return reverString.join(" ")
} */

  function revereString(name) {
    return name
      .split(" ")
      .map((word) => {
        let chars = word.split("")
        let left = 0,
          right = word.length - 1
  
        while (left < right) {
          let temp = chars[left]
          chars[left] = chars[right]
          chars[right] = temp
  
          left++
          right--
        }
  
        return chars.join("")
      })
      .join(" ")
  }
  
  console.log(revereString("aakash deep soni"))
  