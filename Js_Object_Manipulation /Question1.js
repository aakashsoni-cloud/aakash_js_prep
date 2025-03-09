// Find the bug in this question
function showMessage(marks) {
  const message = marks || "Absent"; // in case of null or undefined
  console.log(`Marks ${message}`);
}

let nums = [1, 2, 3];
showMessage(29);
showMessage(0);
showMessage(46);
