// Find the bug in this question
function showMessage(marks) {
  const message = marks || "Absent"; // in case of null or undefined
  console.log(`Marks ${message}`);
}

showMessage(29);
showMessage(0);
showMessage(46);
