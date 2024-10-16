document.querySelectorAll("nav a").forEach((value) => {
  value.addEventListener("click", function (e) {
    e.preventDefault();

    const target = this.getAttribute("href");
    const targetSection = document.querySelector(target);

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
