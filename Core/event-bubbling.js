/*

 -> This is a mechanism of DOM when an event occurs in a nested child element it will ***bubble up*** to the parent element  
 -> Event start at target element & Propagate to the root of DOM tree
 -> use event.stopPropagation() to stop propagation
*/

document.getElementById("parent").addEventListener("click", function () {
  console.log("parent is clicked");

  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
});

document.getElementById("child").addEventListener("click", function (event) {
  console.log("child is clicked");
    event.stopPropagation();
});


// create dynamic button on html
const button = document.createElement("button");
button.id = "child2";
button.innerHTML = "Event Bubble Parent Child 2";
document.getElementById("parent").append(button);

document.getElementById("child2").addEventListener("click", function (event) {
  console.log("child2 is clicked");
  // event.stopPropagation();
});
