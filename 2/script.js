const ipt = document.getElementById("ipt");
const btn = document.getElementById("btn");
const elP = document.getElementById("elP");
btn.addEventListener("click", function () {
  //If the input field is not empty, display its value in a <p> tag below the button.
  //If the input field is empty, display a red warning message saying "Please enter a value".
  if (ipt.value) {
    elP.textContent = ipt.value;
  } else {
    elP.textContent = `Please enter a value`;
    elP.style.cssText = "color: red;";
  }
});
