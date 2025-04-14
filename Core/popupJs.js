/* 1. alert() — Simple Message Popup
    Used to show a message to the user.
    Only has an "OK" button.
*/
alert("Hello! This is an alert box.");

/* 2. confirm() — Confirmation Box
    Used to ask the user to confirm an action.
    Has "OK" and "Cancel" buttons.
    Returns true if OK is clicked, false if Cancel is clicked.
*/

const result = confirm("Are you sure you want to delete?");
if (result) {
  alert("Deleted successfully!");
} else {
  alert("Cancelled.");
}

/* 3. prompt() — Input Box Popup
    Used to take input from the user.
    Returns the input value if submitted, or null if canceled.
*/

const name = prompt("Enter your name:");
if (name) {
  alert(`Hello, ${name}!`);
} else {
  alert("You didn’t enter your name.");
}