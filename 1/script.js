// Select the first <p> tag  and change its text to "First paragraph has been updated!"
document.querySelector(".firstP").textContent =
  "First paragraph has been updated!";
//Select all <p> tags and change their content to "Paragraph 1", "Paragraph 2", and "Paragraph 3", respectively.
const pTag = document.querySelectorAll("p");
pTag.forEach((value, index) => {
  value.textContent = `Paragraph ${index + 1}`;
});
// select all <p> elements and change their background color to light blue
pTag.forEach((value) => {
  value.style.cssText = "background-color: lightblue;";
});
