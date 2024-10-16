const result = document.getElementById("result");
const resultText = document.getElementById("resultText");
const resultNumber = document.getElementById("resultNumber");
const inpText = document.getElementById("inpText");
const inpNumber = document.getElementById("inpNumber");
const btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const textValue = inpText.value;
  const numberValue = Number(inpNumber.value);
  result.textContent = "";
  if (textValue) {
    resultText.textContent = "";
    resultText.textContent = textValue;
  } else {
    result.textContent = result.textContent + "text Err";
  }
  if (numberValue > 18 && numberValue < 100) {
    resultNumber.textContent = "";
    resultNumber.textContent = numberValue;
  } else {
    result.textContent = result.textContent + "number Err";
  }
});
