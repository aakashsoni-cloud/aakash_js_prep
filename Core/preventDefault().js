// Prevent form submission -> prevent page reload as default behavior
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted");
});

// Prevent navigation on link click -> prevent navigate to the link as default behavior
const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Link clicked");
});

// Prevent form submission on Enter key press
const input = document.getElementById("textBox");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents form submission
    console.log("Enter key pressed");
  }
});

const button = document.getElementById("defaultButton");

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Button clicked");
});
