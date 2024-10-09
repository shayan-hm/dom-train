const li = document.querySelectorAll("li");
const btn = document.querySelector("button");
const result = document.getElementById("dv");
li.forEach((value) => {
  value.addEventListener("click", function () {
    result.textContent = value.textContent;
  });
  value.addEventListener("mouseover", function () {
    value.classList.add("hvr");
  });
  value.addEventListener("mouseout", function () {
    value.classList.remove("hvr");
  });
});
btn.addEventListener("click", function () {
  li.forEach((value) => {
    value.style.cssText = "display : none";
    // value.textContent = "";
  });
});
